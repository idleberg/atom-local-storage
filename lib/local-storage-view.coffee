{SelectListView} = require 'atom-space-pen-views'
meta = require '../package.json'

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

    atom.workspace.open(item)
      .then (editor) ->
        text = localStorage.getItem(item)
        editor.setText(text)
      .catch (error) ->
        atom.notifications.addError(error, dismissable: true)

  cancelled: ->
    @panel.destroy()

  getAllItems: () ->
    allKeys = []

    for i in [1...localStorage.length] by 1
      key = localStorage.key(i)

      if atom.config.get('local-storage.showItems.installedPackages') isnt true and key.startsWith "installed-packages:"
        console.log "#{meta.name}: Skipping '#{key}'" if atom.inDevMode() 
        continue
      if atom.config.get('local-storage.showItems.settingsView') isnt true and key.startsWith "settings-view:"
        console.log "#{meta.name}: Skipping '#{key}'" if atom.inDevMode() 
        continue
      if atom.config.get('local-storage.showItems.treeView') isnt true and key.startsWith "tree-view:"
        console.log "#{meta.name}: Skipping '#{key}'" if atom.inDevMode() 
        continue
      if atom.config.get('local-storage.showItems.releaseNotes') isnt true and key.startsWith "release-notes:"
        console.log "#{meta.name}: Skipping '#{key}'" if atom.inDevMode() 
        continue
      if atom.config.get('local-storage.showItems.metricsID') isnt true and key is "metrics.userId"
        console.log "#{meta.name}: Skipping '#{key}'" if atom.inDevMode() 
        continue
      allKeys.push key

    return allKeys
