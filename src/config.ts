const config = {
  detectJson: {
    title: 'Auto-detect JSON',
    description: 'If the the opened item is valid JSON, prettifies output and applies syntax highlighter',
    type: 'boolean',
    default: true,
    order: 1
  },
  displayIcon: {
    title: 'Display Icon',
    description: 'Displays icons in list view for improved visual grepping',
    type: 'boolean',
    default: true,
    order: 2
  },
  displayBadge: {
    title: 'Display Badge',
    description: 'Displays badge showing item details, e.g. character length',
    type: 'boolean',
    default: true,
    order: 3
  },
  highlightEditPane: {
    title: 'Highlight Edit Pane',
    description: 'Sets a background color to the editor pane',
    type: 'boolean',
    default: true,
    order: 4
  },
  hideCloseIcon: {
    title: 'Hide Close Icon',
    description: 'Hides close icon of the editor pane',
    type: 'boolean',
    default: true,
    order: 5
  },
  debugMode: {
    title: 'Debug Mode',
    description: 'Specifies whether to log all actions to console',
    type: 'boolean',
    default: false,
    order: 6
  },
  filteredItems: {
    title: 'Filtered Items',
    type: 'object',
    order: 7,
    properties: {
      installedPackages: {
        title: 'Installed Packages',
        description: 'Filter all keys in your storage starting with `installed-packages:`',
        type: 'boolean',
        default: true,
        order: 1
      },
      settingsView: {
        title: 'Settings View',
        description: 'Filter all keys in your storage starting with `settings-view:`',
        type: 'boolean',
        default: true,
        order: 2
      },
      treeView: {
        title: 'Tree View',
        description: 'Filter all keys in your storage starting with `tree-view:`',
        type: 'boolean',
        default: true,
        order: 3
      },
      releaseNotes: {
        title: 'Release Notes',
        description: 'Filter all keys in your storage starting with `release-notes:`',
        type: 'boolean',
        default: true,
        order: 4
      },
      metricsID: {
        title: 'Metrics User ID',
        description: 'Filter storage key for `metrics.userId`',
        type: 'boolean',
        default: true,
        order: 5
      },
      emptyItems: {
        title: 'Empty Items',
        description: 'Filter all zero-length strings, empty array and objects',
        type: 'boolean',
        default: true,
        order: 6
      },
      nullItems: {
        title: 'Null Items',
        description: 'Filter all null items',
        type: 'boolean',
        default: true,
        order: 7
      },
      // customFilters: {
      //   title: 'Custom Filters',
      //   description: 'Comma-delimited list of prefixes to be filtered',
      //   type: 'array',
      //   items: {
      //     type: 'string'
      //   },
      //   default: [],
      //   order: 8
      // }
    }
  }
};

export {
  config
};
