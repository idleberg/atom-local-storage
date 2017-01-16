{CompositeDisposable} = require 'atom'
EditLocalStorageView = require './local-storage-view'
meta = require '../package.json'

module.exports = EditLocalStorage =
  config:
    detectJson:
      title: "Auto-detect JSON"
      description: "If the the opened item is valid JSON, apply syntax highlighter"
      type: "boolean"
      default: true
      order: 1
    limitToDevMode:
      title: "Limit to Developer Mode"
      description: "This package only works reliably in Developer Mode. For testing purposes, you can remove this limitation."
      type: "boolean"
      default: true
      order: 2
    ignoredItems:
      title: "Ignored Atom Keys"
      type: "object"
      order: 3
      properties:
        installedPackages:
          title: "Installed Packages"
          description: "Ignore all keys in your localStorage starting with `installed-packages:`"
          type: "boolean"
          default: true
          order: 1
        settingsView:
          title: "Settings View"
          description: "Ignore all keys in your localStorage starting with `settings-view:`"
          type: "boolean"
          default: true
          order: 2
        treeView:
          title: "Tree View"
          description: "Ignore all keys in your localStorage starting with `tree-view:`"
          type: "boolean"
          default: true
          order: 3
        releaseNotes:
          title: "Release Notes"
          description: "Ignore all keys in your localStorage starting with `release-notes:`"
          type: "boolean"
          default: true
          order: 4
        metricsID:
          title: "Metrics User ID"
          description: "Ignore localStorage key for `metrics.userId`"
          type: "boolean"
          default: true
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
    if atom.config.get("#{meta.name}.limitToDevMode") is true and atom.inDevMode() is false
      return @warning()
    @localHostView = new EditLocalStorageView(state.localHostViewState)

  save: (state) ->
    if atom.config.get("#{meta.name}.limitToDevMode") is true and atom.inDevMode() is false
      return @warning()

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

  warning: ()->
    buttons = null
    editor = atom.workspace.getActiveTextEditor()

    if editor
      buttons = [
        {
          text: 'Open in Developer Mode'
          onDidClick: =>
            editor = atom.workspace.getActiveTextEditor()
            if editor
              atom.commands.dispatch atom.views.getView(editor), 'application:open-dev'
        }
      ]

    return atom.notifications.addError(
      "This package currently works in Developer Mode only",
      dismissable: true,
      buttons: buttons
    )
