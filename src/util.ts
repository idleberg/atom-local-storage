import { tmpdir } from 'os';
import { join } from 'path';

let storageEditors: number[] = [];

async function createListView(action) {
  const { selectListView } = await import('./view');
  const storageItems = Object.keys(localStorage).filter( key => filterKeys(key));

  if (storageItems === undefined) return;

  const selection = await selectListView(
    storageItems
  );

  if (selection === undefined) return;

  switch (action) {
    case 'open':
      openItem(selection);
      break;

    case 'remove':
      removeItem(selection);
      break;

    default:
      break;
  }
}

function openItem(item) {
  const uri = isProject() ? item : join(tmpdir(), item);

  atom.workspace.open(uri).then( editor => {
    const debugMode = getConfig('debugMode');

    if (debugMode) console.log(`Opening '${item}' from localStorage`);

    let itemString: string | null = localStorage.getItem(item);

    if (!itemString) return;

    if (getConfig('detectJson')) {
      let itemObj;

      try {
        itemObj = JSON.parse(itemString);
      } catch (error) {
        if (debugMode) console.warn(`"${itemString}" is not an object`);
      }

      if (typeof itemObj === 'object') {
        editor.setGrammar(atom.grammars.grammarForScopeName('source.json'));
        itemString = JSON.stringify(JSON.parse(itemString), null, 2);
      }
    }

    editor.setText(itemString);
    showPanel(editor);
  }).catch( error => {
    atom.notifications.addError(error.toString(), {
      dismissable: true
    });
  });
}

function saveItem() {
  const editor = atom.workspace.getActiveTextEditor();

  if (editor == null) return atom.beep();

  const title = editor.getTitle();
  let content = editor.getText();
  const scope = editor.getGrammar().scopeName;

  if (scope === 'source.json') {
    content = JSON.stringify(JSON.parse(content));
  }

  if (localStorage.getItem(title)) {
    return localStorage.setItem(title, content);
  } else {
    const notification = atom.notifications.addInfo(
      `The item \`${title}\` is currently not in your localStorage. Are you sure you want to create a new item?`, {
      dismissable: true,
      buttons: [
        {
          text: 'Create Item',
          className: 'icon icon-file-add',
          onDidClick: () => {
            localStorage.setItem(title, content);
            notification.dismiss();
          }
        },
        {
          text: 'Cancel',
          onDidClick: () => notification.dismiss()
        }
      ]
    });
  }
}

function removeItem(item) {
  const notification = atom.notifications.addWarning(
    `Do you really want to delete \`${item}\` from your localStorage?`, {
    dismissable: true,
    buttons: [
      {
        text: 'Remove Item',
        className: 'icon icon-trashcan',
        onDidClick: () => {
          localStorage.removeItem(item);
          notification.dismiss();
        }
      },
      {
        text: 'Cancel',
        onDidClick: () => notification.dismiss()
      }
    ]
  });
}

function showPanel(editor) {
  if (!editor) {
    return atom.beep();
  }

  if (!storageEditors.includes(editor.id)) {
    storageEditors.push(editor.id);
  }

  const atomPanel: HTMLElement = document.createElement('atom-panel');
  atomPanel.classList.add('padded');
  if (getConfig('highlightEditPane')) {
     atomPanel.classList.add('bg-primary');
  }
  atomPanel.setAttribute('data-local-storage', editor.id.toString());

  atomPanel.insertAdjacentHTML('beforeend', `
    <div class='block'>
      <span class="inline-block-tight">
      <i class="icon icon-alert"></i>
      <strong></strong> To save changes back to localStorage, make sure to use the controls on the right</span>
      <div class="inline-block-tight pull-right">
        <button class="btn btn-primary icon icon-database">Save</button>
        <button class="btn btn-default">Close</button>
      </div>
    </div>
  `);

  const saveButton: HTMLElement = atomPanel.querySelector('.btn-primary') as HTMLElement;
  saveButton.addEventListener('click', saveItem);

  const closeButton: HTMLElement = atomPanel.querySelector('.btn-default') as HTMLElement;
  closeButton.addEventListener('click', () => {

    const scope = editor.getGrammar().scopeName;
    const text = editor.getText();
    const item = localStorage.getItem(editor.getTitle());

    if (scope === 'source.json') {
      if (JSON.stringify(JSON.parse(text), null, 0) === item) {
        return closeEditor(editor);
      }
    } else {
      if (text === item) {
        return closeEditor(editor);
      }
    }

    const notification = atom.notifications.addInfo(
      `This localStorage item has changes, do you really want to discard them?`, {
      dismissable: true,
      buttons: [
        {
          text: 'Discard Changes',
          className: 'icon icon-trashcan',
          onDidClick: () => {
            closeEditor(editor);
            notification.dismiss();
          }
        },
        {
          text: 'Cancel',
          onDidClick: () => notification.dismiss()
        }
      ]
    });
  });

  atom.workspace.addBottomPanel({item: atomPanel});
  atom.workspace.onDidChangeActiveTextEditor(editor => toggleEditorPanel(editor));
  editor.onDidDestroy(() => {
    removePanel(editor.id);
  });

  toggleEditorPanel(editor);
}

function toggleEditorPanel(editor) {
  hidePanels();

  if (!editor) return;

  const elem = document.querySelector(`[data-local-storage="${editor.id}"]`);

  if (elem && elem.parentNode) {
    const parentNode: HTMLElement = elem.parentNode as HTMLElement;

    if (parentNode) {
      parentNode.style.display = (editor && storageEditors.includes(editor.id)) ? 'block' : 'none';
    }
  }
}

function removePanel(id) {
  const controls: HTMLElement = document.querySelector(`[data-local-storage="${id}"`) as HTMLElement;

  if (controls && controls.parentNode) {
    controls.parentNode.removeChild(controls);
  }
}

function hidePanels() {
  const controls = document.querySelectorAll('[data-local-storage]');

  if (controls.length) {
    controls.forEach(control => {
      const parentNode: HTMLElement = control.parentNode as HTMLElement;

      if (parentNode) {
        parentNode.style.display = 'none';
      }
    });
  }
}

function filterKeys(key: string): boolean {
  const { installedPackages, settingsView, treeView, releaseNotes, metricsID, emptyItems, nullItems } = getConfig('filteredItems');
  const value: string | null = localStorage.getItem(key) || '';

  if (
    (installedPackages === false || !key.startsWith('installed-packages:')) &&
    (settingsView === false || !key.startsWith('settings-view:')) &&
    (treeView === false || !key.startsWith('tree-view:')) &&
    (releaseNotes === false || !key.startsWith('release-notes:')) &&
    (metricsID === false || key !== 'metrics.userId') &&
    (emptyItems === false || !['[]', '{}', ''].includes(value)) &&
    (nullItems === false || value !== 'null')
  ) {
    return true;
  } else {
    if (getConfig('debugMode')) console.log(`Skipping '${key}'`);
    return false;
  }
}

function closeEditor(editor) {
  const index = storageEditors.indexOf(editor.id);
  storageEditors.splice(index, 1);

  removePanel(editor.id);

  // @ts-ignore
  editor.destroy();
}

function getConfig(key: string = '') {
  return atom.config.get(`local-storage.${key}`);
}

function createHTML(key: string): string {
  const value: string | null = localStorage.getItem(key);
  const icon: string = getIcon(key);

  if (getConfig('displayBadge')) {
    const badgeStyle: string = getBadgeStyle(value);
    const badgeText: string = getBadgeText(value);

    return `
      ${icon}
      <div class=\"pull-right\">
        <code class=\"badge badge-${badgeStyle}\">${badgeText}</code>
      </div>
    `;
  }

  return `${icon}`;
}

function getIcon(key) {
  if (!getConfig('displayIcon')) {
    return key;
  }

  let icon: string;

  if (key.startsWith('installed-packages:')) {
    icon = 'package';
  } else if (key.startsWith('settings-view:')) {
    icon = 'tools';
  } else if (key.startsWith('tree-view:')) {
    icon = 'list-unordered';
  } else if (key.startsWith('release-notes')) {
    icon = 'megaphone';
  } else if (key === 'defaultWindowDimensions') {
    icon = 'browser';
  } else if (key === 'hasSeenDeprecatedNotification') {
    icon = 'checklist';
  } else if (key === 'history') {
    icon = 'clock';
  } else if (key === 'metrics.userId') {
    icon = 'dashboard';
  } else {
    icon = 'database';
  }

  return `
    <div class="icon icon-${icon}">
      ${key}
    </div>
  `;
}

function getBadgeStyle(value) {
  switch (value) {
    case 'true':
      return 'success';

    case 'false':
      return 'error';

    case 'null':
      return 'warning';

    case 'null':
      return 'warning';

    default:
      return 'info';
  }
}

function getBadgeText(value) {
  switch (value) {
    case 'true':
      return 'true';

    case 'false':
      return 'false';

    case 'null':
      return 'null';

    case '[]':
      return '[]';

    case '{}':
      return '{}';

    default:
      const chars = value.length > 1 ? 'chars' : 'char';
      return `${value.length} ${chars}`;
  }
}

function isProject() {
  const projectPaths: string[] = atom.project.getPaths();

  return projectPaths.length > 0 ? true : false;
}

export {
  createHTML,
  createListView,
  filterKeys,
  getConfig,
  saveItem
};
