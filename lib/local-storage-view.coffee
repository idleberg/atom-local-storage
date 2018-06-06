{ name } = require "../package.json"
SelectListView = require "atom-select-list"

module.exports = LocalStorageView =

  init: (mode) ->
    @selectListView = new SelectListView({
      emptyMessage: "No items found in localStorage",
      items: []

      filterKeyForItem: (item) -> item.name

      elementForItem: (item) ->
        element = document.createElement "li"
        element.classList.add "inline-block"

        icon = ""
        badge = ""
        badgeStyle = "badge-#{atom.config.get "local-storage.badgeStyle"}"

        if item.chars is 1
          unit = " char"
        else if item.chars > 1
          unit = " chars"
        else
          unit = ""

        badgeStyle = "" if badgeStyle is "(default)"

        if atom.config.get "local-storage.displayBadge"
          badge = "<div class=\"pull-right\"><span class=\"badge #{badgeStyle}\">#{item.chars}#{unit}</span></div>"

        if atom.config.get "local-storage.displayIcon"
          html = "<div class=\"icon icon-#{item.icon}\">#{item.name}#{badge}</div>"
        else
          html = "#{icon}##{badge}"

        element.innerHTML = html
        element

      didConfirmSelection: (item) =>
        @cancel()

        if mode is "delete"
          @delete(item.name)
        else
          @open(item.name)

        console.log "'#{item.name}' was selected" if atom.config.get("local-storage.debugMode")

      didCancelSelection: () =>
        @cancel()
    })
    @selectListView.element.classList.add("local-storage-list")

  dispose: ->
    @cancel()
    @selectListView.destroy()

  cancel: ->
    if @panel?
      @panel.destroy()
    @panel = null

    if @previouslyFocusedElement
      @previouslyFocusedElement.focus()
      @previouslyFocusedElement = null

  attach: ->
    @previouslyFocusedElement = document.activeElement
    if not @panel?
      @panel = atom.workspace.addModalPanel({item: @selectListView})
    @selectListView.focus()
    @selectListView.reset()

  toggle: ->
    if @panel?
      @cancel()
    else
      @selectListView.update({items: @getAllItems()})
      @attach()

  open: (item) ->
    atom.workspace.open(item.toString())
      .then (editor) ->
        require("./ga").sendEvent name, "Open Item"
        console.log "Opening '#{key}'" if atom.config.get("local-storage.debugMode")
        text = localStorage.getItem(item)

        if atom.config.get("local-storage.detectJson") is true
          try
            obj = JSON.parse(text)
          catch e
            console.log "'#{item} is not an object" if atom.config.get("local-storage.debugMode")

          if typeof obj is "object"
            console.log "'#{item} is an object" if atom.config.get("local-storage.debugMode")
            editor.setGrammar(atom.grammars.grammarForScopeName("source.json"))
            text = JSON.stringify(JSON.parse(text), null, 2)

        editor.setText(text)
      .catch (error) ->
        atom.notifications.addError(error, dismissable: true)

  delete: (item) ->
    notification = atom.notifications.addWarning(
      "Do you really want to delete `#{item}` from localStorage?",
      dismissable: true,
      buttons: [
        {
          text: 'Delete Item'
          onDidClick: ->
            require("./ga").sendEvent name, "Delete Item"
            console.log "Deleting '#{key}'" if atom.config.get("local-storage.debugMode")
            localStorage.removeItem(item)
            notification.dismiss()
        }
        {
          text: 'Cancel'
          onDidClick: ->
            require("./ga").sendEvent name, "Cancelled: Delete Item"
            notification.dismiss()
        }
      ]
    )

  getAllItems: () ->
    console.clear() if atom.config.get("local-storage.debugMode")

    allKeys = []
    storageLength = localStorage.length

    for i in [1...storageLength] by 1
      key = localStorage.key(i)

      # Built-in Filters
      if atom.config.get("local-storage.filteredItems.installedPackages") is true and key.startsWith "installed-packages:"
        console.log "Skipping '#{key}'" if atom.config.get("local-storage.debugMode")
        continue
      if atom.config.get("local-storage.filteredItems.settingsView") is true and key.startsWith "settings-view:"
        console.log "Skipping '#{key}'" if atom.config.get("local-storage.debugMode")
        continue
      if atom.config.get("local-storage.filteredItems.treeView") is true and key.startsWith "tree-view:"
        console.log "Skipping '#{key}'" if atom.config.get("local-storage.debugMode")
        continue
      if atom.config.get("local-storage.filteredItems.releaseNotes") is true and key.startsWith "release-notes:"
        console.log "Skipping '#{key}'" if atom.config.get("local-storage.debugMode")
        continue
      if atom.config.get("local-storage.filteredItems.metricsID") is true and key is "metrics.userId"
        console.log "Skipping '#{key}'" if atom.config.get("local-storage.debugMode")
        continue

      # Custom Filters
      customFilters = atom.config.get("local-storage.filteredItems.customFilters").trim()
      if customFilters.length > 0
        customFilters = customFilters.split(",")

        for filter in customFilters
          if key.startsWith(filter)
            console.log "Skipping '#{key}'" if atom.config.get("local-storage.debugMode")
            key = ""

      # Icons
      if atom.config.get("local-storage.displayIcon")
        if key.startsWith "installed-packages:"
          icon = "package"
        else if key.startsWith "settings-view:"
          icon = "tools"
        else if key.startsWith "tree-view:"
          icon = "list-unordered"
        else if key.startsWith "release-notes"
          icon = "megaphone"
        else if key is "defaultWindowDimensions"
          icon = "browser"
        else if key is "hasSeenDeprecatedNotification"
          icon = "checklist"
        else if key is "history"
          icon = "clock"
        else if key is "metrics.userId"
          icon = "dashboard"
        else
          icon = "database"

      # Character length
      item = localStorage.getItem(key)

      if atom.config.get "local-storage.displayBadge"
        if item is "true"
          chars = "true"
        else if item is "false"
          chars = "false"
        else if item is "null"
          if atom.config.get("local-storage.filteredItems.nullItems")
            console.log "Skipping '#{key}'" if atom.config.get("local-storage.debugMode")
            continue
          chars = "null"
        else if item isnt "[]" and item isnt "{}"
          chars = item.length
        else
          if atom.config.get("local-storage.filteredItems.emptyItems")
            console.log "Skipping '#{key}'" if atom.config.get("local-storage.debugMode")
            continue
          chars = "0"

      # Add to list
      allKeys.push {name: key, icon: icon, chars: chars } if key isnt ""

    return allKeys
