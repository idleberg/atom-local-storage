import { CompositeDisposable } from 'atom';
import { addPaneAttribute, createListView, removePaneAttribute, saveItem } from './functions';
export { config } from './config';

let subscriptions: CompositeDisposable | undefined;

export async function activate() {
  // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
  subscriptions = new CompositeDisposable();

  // Register commands
  subscriptions.add(atom.commands.add('atom-workspace', {
    'local-storage:open-item': () => createListView('open')
  }));

  subscriptions.add(atom.commands.add('atom-workspace', {
    'local-storage:remove-item': () => createListView('remove')
  }));

  subscriptions.add(atom.commands.add('atom-workspace', {
    'local-storage:save-item': () => saveItem()
  }));

  atom.config.observe('local-storage.hideCloseIcon', hideCloseIcon => {
    if (hideCloseIcon) {
      addPaneAttribute();
    } else {
      removePaneAttribute();
    }
  });
}

export function deactivate() {
  subscriptions && subscriptions.dispose();
}
