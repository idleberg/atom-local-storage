{CompositeDisposable} = require 'atom'
EditLocalStorageView = require './local-storage-view'

module.exports = EditLocalStorage =
  config:
    showItems:
      title: "Show Atom Keys"
      type: "object"
      order: 1
      properties:
        installedPackages:
          title: "Installed Packages"
          description: "Shows all keys in your localStorage starting with `installed-packages:`"
          type: "boolean"
          default: false
          order: 1
        settingsView:
          title: "Settings View"
          description: "Shows all keys in your localStorage starting with `settings-view:`"
          type: "boolean"
          default: false
          order: 2
        treeView:
          title: "Tree View"
          description: "Shows all keys in your localStorage starting with `tree-view:`"
          type: "boolean"
          default: false
          order: 3
        releaseNotes:
          title: "Release Notes"
          description: "Shows all keys in your localStorage starting with `release-notes:`"
          type: "boolean"
          default: false
          order: 4
        metricsID:
          title: "Metrics User ID"
          description: "Shows localStorage key for `metrics.userId`"
          type: "boolean"
          default: false
          order: 5
  localHostView: null
  subscriptions: null

  activate: (state) ->
    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'local-storage:open': => @toggle(state)
    @subscriptions.add atom.commands.add 'atom-workspace', 'local-storage:save': => @save(state)

  deactivate: ->
    @subscriptions.dispose()
    @localHostView.destroy()

  serialize: ->

  toggle: (state) ->
    unless atom.inDevMode()
      atom.notifications.addWarning("local-storage", detail: "This package currently works in Developer Mode only", dismissable: true)
      return
    @localHostView = new EditLocalStorageView(state.localHostViewState)

  save: (state) ->
    unless atom.inDevMode()
      atom.notifications.addWarning("local-storage", detail: "This package currently works in Developer Mode only", dismissable: true)
      return

    editor = atom.workspace.getActiveTextEditor()
    unless editor?
      atom.beep()
      return

    title = editor.getTitle()
    content = editor.getText()

    if localStorage.getItem(title)
      localStorage.setItem(title, content)
    else
      atom.confirm
        message: "Warning"
        detailedMessage: "The item '#{title}' is currently not in your localStorage. Are you sure you want to create a new item?"
        buttons:
          "Create Item": ->
            localStorage.setItem(title, content)
          "Cancel": -> return
