SelectListView = require 'atom-select-list'

module.exports = LocalStorageView =

  init: ->
    @selectListView = new SelectListView({
      emptyMessage: 'No items found in localStorage',
      items: []

      filterKeyForItem: (item) -> item.name

      elementForItem: (item) ->
        element = document.createElement 'li'

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

        icon = "<div class=\"icon icon-#{item.icon}\"></div>" if atom.config.get "local-storage.displayIcon"
        badge = "<div class=\"pull-right\"><span class=\"badge #{badgeStyle}\">#{item.chars}#{unit}</span></div>" if atom.config.get "local-storage.displayLength"

        html = "#{icon}#{item.name}#{badge}"
        element.innerHTML = html
        element

      didConfirmSelection: (item) =>
        @cancel()
        @open(item.name)

        console.log "'#{item.name}' was selected" if atom.inDevMode()

      didCancelSelection: () =>
        @cancel()
    })
    @selectListView.element.classList.add('local-storage-list')

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
      dir = atom.config.get "screen-recorder.targetDirectory"
      @selectListView.update({items: @getAllItems()})
      @attach()

  open: (item) ->
    atom.workspace.open(item.toString())
      .then (editor) ->
        text = localStorage.getItem(item)
        editor.setText(text)

        if atom.config.get "local-storage.detectJson" is true
          try
            obj = JSON.parse(text)
          catch e
            console.log "'#{item} is not an object"

          if typeof obj is 'object'
            editor.setGrammar(atom.grammars.grammarForScopeName('source.json'))
      .catch (error) ->
        atom.notifications.addError(error, dismissable: true)

  getAllItems: () ->
    allKeys = []

    for i in [1...localStorage.length] by 1
      key = localStorage.key(i)
      icon = "database" if atom.config.get "local-storage.displayIcon" if atom.config.get "local-storage.displayIcon" or ""

      console.log "-#{key}-"
      console.log key.startsWith "installed-packages:"
      console.log atom.config.get "local-storage.ignoredItems.installedPackages"
      # Built-in Filters
      if key.startsWith "installed-packages:"
        icon = "package" if atom.config.get "local-storage.displayIcon"
        if atom.config.get "local-storage.ignoredItems.installedPackages" is true
          console.log "Skipping '#{key}'" if atom.inDevMode()
          continue
      if key.startsWith "settings-view:"
        icon = "tools" if atom.config.get "local-storage.displayIcon"
        if atom.config.get "local-storage.ignoredItems.settingsView" is true
          console.log "Skipping '#{key}'" if atom.inDevMode()
          continue
      if key.startsWith "tree-view:"
        icon = "list-unordered" if atom.config.get "local-storage.displayIcon"
        if atom.config.get "local-storage.ignoredItems.treeView" is true
          console.log "Skipping '#{key}'" if atom.inDevMode()
          continue
      if key.startsWith "release-notes:"
        icon = "megaphone" if atom.config.get "local-storage.displayIcon"
        if atom.config.get "local-storage.ignoredItems.releaseNotes" is true
          console.log "Skipping '#{key}'" if atom.inDevMode()
          continue
      if key is "metrics.userId"
        icon = "dashboard" if atom.config.get "local-storage.displayIcon"
        if atom.config.get "local-storage.ignoredItems.metricsID" is true
          console.log "Skipping '#{key}'" if atom.inDevMode()
          continue
      if key is "defaultWindowDimensions"
        icon = "browser" if atom.config.get "local-storage.displayIcon"
      if key is "hasSeenDeprecatedNotification"
        icon = "checklist" if atom.config.get "local-storage.displayIcon"
      if key is "history"
        icon = "clock" if atom.config.get "local-storage.displayIcon"

      item = localStorage.getItem(key)

      if atom.config.get "local-storage.displayLength"
        if item isnt "[]" and item isnt "{}"
          chars = item.length
        else
          chars = "0"

      # Custom Filters
      # customFilters = atom.config.get("local-storage.ignoredItems.customFilters").trim()
      # if customFilters.length > 0
      #   customFilters = customFilters.split(",")

      #   for filter in customFilters
      #     if key.startsWith(filter)
      #       console.log "Skipping '#{key}'" if atom.inDevMode()
      #       key = ""

      allKeys.push {name: key, icon: icon, chars: chars } if key isnt ""

    return allKeys
