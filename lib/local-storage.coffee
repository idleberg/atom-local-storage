{ name } = require "../package.json"

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
    displayBadge:
      title: "Display Badge"
      description: "Displays badge showing item details, e.g. character length"
      type: "boolean"
      default: true
      order: 4
    debugMode:
      title: "Debug Mode"
      description: "Specifies whether to log all actions to console"
      type: "boolean"
      default: false
      order: 5
    filteredItems:
      title: "Filtered Items"
      type: "object"
      order: 6
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
        nullItems:
          title: "Null Items"
          description: "Filter all null items"
          type: "boolean"
          default: true
          order: 7
        customFilters:
          title: "Custom Filters"
          description: "Comma-delimited list of prefixes to be filtered"
          type: "string"
          default: ""
          order: 8
  subscriptions: null
  storageEditor: []

  activate: (state) ->
    { CompositeDisposable } = require "atom"

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add "atom-workspace", "#{name}:open-item": => @show(state, "open")
    @subscriptions.add atom.commands.add "atom-workspace", "#{name}:delete-item": => @show(state, "delete")
    @subscriptions.add atom.commands.add "atom-workspace", "#{name}:save-item": => @save()

    @subscriptions.add atom.workspace.onDidChangeActiveTextEditor => @subscribeToActiveTextEditor()

    @cleanup

  deactivate: ->
    @subscriptions.dispose()

  cleanup: ->
    atom.config.unset "#{name}.badgeStyle"

  show: (state, mode) ->
    @storagelist = require "./local-storage-view"

    @storagelist.init(mode)
    @storagelist.toggle()

  subscribeToActiveTextEditor: () ->
    editor = atom.workspace.getActiveTextEditor()
    console.log "Switched to #{editor.id}"

  save: () ->
    return @warning() if atom.config.get("#{name}.limitToDevMode") is true and atom.inDevMode() is false

    require("./ga").sendEvent name, "Save Item"
    editor = atom.workspace.getActiveTextEditor()
    return atom.beep() unless editor?

    title = editor.getTitle()
    content = editor.getText()
    scope = editor.getGrammar().scopeName

    if scope is "source.json"
      content = JSON.stringify(JSON.parse(content))

    if localStorage.getItem(title)
      localStorage.setItem(title, content)
    else
      atom.confirm
        message: "Warning"
        detailedMessage: "The item '#{title}' is currently not in your localStorage. Are you sure you want to create a new item?"
        buttons:
          "Create Item": ->
            require("./ga").sendEvent name, "Create Item"
            localStorage.setItem(title, content)
          "Cancel": ->
            require("./ga").sendEvent name, "Cancelled: Create Item"
            return

  warning: () ->
    require("./ga").sendEvent name, "Warning: Open in Developer Mode"
    notification = atom.notifications.addWarning(
      "This package currently works in Developer Mode only",
      dismissable: true,
      buttons: [
        {
          text: "Open in Developer Mode"
          onDidClick: ->
            require("./ga").sendEvent name, "Open in Developer Mode"
            atom.commands.dispatch atom.views.getView(atom.workspace), "application:open-dev"
            notification.dismiss()
        }
      ]
    )
