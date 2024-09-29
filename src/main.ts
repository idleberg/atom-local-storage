import { CompositeDisposable } from 'atom';
import { addPaneAttributes, createListView, removePaneAttributes, saveItem } from './functions';
import config from './config';
import Logger from './log';

const LocalStorage = {
	config: config.schema,
	subscriptions: new CompositeDisposable(),

	async activate(): Promise<void> {
		Logger.log('Activating package');

		// Register commands
		this.subscriptions.add(
			atom.commands.add('atom-workspace', {
				'local-storage:open-item': () => createListView('open'),
			}),
		);

		this.subscriptions.add(
			atom.commands.add('atom-workspace', {
				'local-storage:remove-item': () => createListView('remove'),
			}),
		);

		this.subscriptions.add(
			atom.commands.add('atom-workspace', {
				'local-storage:save-item': () => saveItem(),
			}),
		);

		atom.config.observe('local-storage.hideCloseIcon', (hideCloseIcon) => {
			if (hideCloseIcon) {
				addPaneAttributes();
			} else {
				removePaneAttributes();
			}
		});
	},

	deactivate(): void {
		Logger.log('Deactivating package');

		this.subscriptions?.dispose();
	},
};

export default LocalStorage;
