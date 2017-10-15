module.exports = LocalStorage =
  config:
    limitToDevMode:
      title: "Limit to Developer Mode"
      description: "This package only works *reliably* in Developer Mode. For testing purposes, you can remove this limitation."
      type: "boolean"
      default: true
      order: 1
    detectJson:
      title: "Auto-detect JSON"
      description: "If the the opened item is valid JSON, prettifies output and applies syntax highlighter"
      type: "boolean"
      default: true
      order: 2
    displayIcon:
      title: "Display Icon"
      description: "Displays icons in list view for improved visual grepping"
      type: "boolean"
      default: true
      order: 3
    displayLength:
      title: "Display Length"
      description: "Displays character lenght in list view"
      type: "boolean"
      default: true
      order: 4
    badgeStyle:
      title: "Badge Style"
      description: "Choose a badge-style from the [Atom Style Guide](https://github.com/atom/styleguide)"
      type: "string"
      enum: [
        "(default)"
        "info"
        "success"
        "warning"
        "error"
      ]
      default: "info"
      order: 5
    debugMode:
      title: "Debug Mode"
      description: "Specifies whether to log all actions to console"
      type: "boolean"
      default: false
      order: 6
    filteredItems:
      title: "Filtered Items"
      type: "object"
      order: 7
      properties:
        installedPackages:
          title: "Installed Packages"
          description: "Filter all keys in your storage starting with `installed-packages:`"
          type: "boolean"
          default: true
          order: 1
        settingsView:
          title: "Settings View"
          description: "Filter all keys in your storage starting with `settings-view:`"
          type: "boolean"
          default: true
          order: 2
        treeView:
          title: "Tree View"
          description: "Filter all keys in your storage starting with `tree-view:`"
          type: "boolean"
          default: true
          order: 3
        releaseNotes:
          title: "Release Notes"
          description: "Filter all keys in your storage starting with `release-notes:`"
          type: "boolean"
          default: true
          order: 4
        metricsID:
          title: "Metrics User ID"
          description: "Filter storage key for `metrics.userId`"
          type: "boolean"
          default: true
          order: 5
        emptyItems:
          title: "Empty Items"
          description: "Filter all zero-length items"
          type: "boolean"
          default: true
          order: 6
        customFilters:
          title: "Custom Filters"
          description: "Comma-delimited list of prefixes to be filtered"
          type: "string"
          default: ""
          order: 7
  subscriptions: null

  activate: (state) ->
    { CompositeDisposable } = require 'atom'

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'local-storage:open': => @toggle(state)
    @subscriptions.add atom.commands.add 'atom-workspace', 'local-storage:save': => @save()

  deactivate: ->
    @subscriptions.dispose()

  toggle: ->
    @storagelist = require "./local-storage-view"

    @storagelist.init()
    @storagelist.toggle()

  save: () ->
    return @warning() if atom.config.get("local-storage.limitToDevMode") is true and atom.inDevMode() is false

    editor = atom.workspace.getActiveTextEditor()
    return atom.beep() unless editor?

    title = editor.getTitle()
    content = editor.getText()
    scope = editor.getGrammar().scopeName

    if atom.config.get("local-storage.detectJson")
      content = JSON.stringify(JSON.parse(content), null, null)


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
    notification = atom.notifications.addWarning(
      "This package currently works in Developer Mode only",
      dismissable: true,
      buttons: [
        {
          text: 'Open in Developer Mode'
          onDidClick: ->
            atom.commands.dispatch atom.views.getView(atom.workspace), 'application:open-dev'
            notification.dismiss()
        }
      ]
    )
