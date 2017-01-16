{SelectListView} = require 'atom-space-pen-views'

module.exports =
class EditLocalStorageView extends SelectListView
  initialize: ->
    super
    storageItems = @getAllItems()
    @addClass('overlay from-top')
    @setItems(storageItems)
    @panel ?= atom.workspace.addModalPanel(item: this)
    @panel.show()
    @focusFilterEditor()

  viewForItem: (item) ->
    "<li>#{item}</li>"

  confirmed: (item) ->
    console.log "'#{item}' was selected" if atom.inDevMode()
    @panel.destroy()

    atom.workspace.open(item.toString())
      .then (editor) ->
        text = localStorage.getItem(item)
        editor.setText(text)

        if atom.config.get('local-storage.detectJson') is true
          try
            obj = JSON.parse(text)
          catch e
            console.log "'#{item} is not an object"

          if typeof obj is 'object'
            editor.setGrammar(atom.grammars.grammarForScopeName('source.json'))
      .catch (error) ->
        atom.notifications.addError(error, dismissable: true)


  cancelled: ->
    @panel.destroy()

  getAllItems: () ->
    allKeys = []

    for i in [1...localStorage.length] by 1
      key = localStorage.key(i)

      if atom.config.get('local-storage.ignoredItems.installedPackages') is true and key.startsWith "installed-packages:"
        console.log "Skipping '#{key}'" if atom.inDevMode()
        continue
      if atom.config.get('local-storage.ignoredItems.settingsView') is true and key.startsWith "settings-view:"
        console.log "Skipping '#{key}'" if atom.inDevMode()
        continue
      if atom.config.get('local-storage.ignoredItems.treeView') is true and key.startsWith "tree-view:"
        console.log "Skipping '#{key}'" if atom.inDevMode()
        continue
      if atom.config.get('local-storage.ignoredItems.releaseNotes') is true and key.startsWith "release-notes:"
        console.log "Skipping '#{key}'" if atom.inDevMode()
        continue
      if atom.config.get('local-storage.ignoredItems.metricsID') is true and key is "metrics.userId"
        console.log "Skipping '#{key}'" if atom.inDevMode()
        continue
      allKeys.push key

    return allKeys
