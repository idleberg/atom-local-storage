// @ts-ignore
import SelectListView from 'atom-select-list';
import { createHTML } from './util';
import { Panel } from 'atom';

export async function selectListView(
  items: string[],
): Promise<string | undefined> {
  let panel: Panel<SelectListView<string>> | undefined;
  const currentFocus = document.activeElement as HTMLElement | void;

  try {
    return await new Promise<string | undefined>( resolve => {
      const select: SelectListView<string> = new SelectListView({
        items,
        elementForItem: (item: string) => {
          const li = document.createElement('li');
          li.innerHTML = createHTML(item);

          return li;
        },
        didCancelSelection: () => {
          resolve();
        },
        didConfirmSelection: (item: string) => {
          resolve(item);
        }
      });

      panel = atom.workspace.addModalPanel({
        item: select,
        visible: true,
      });

      select.focus();
    });
  } finally {
    if (panel) panel.destroy();
    if (currentFocus) currentFocus.focus();
  }
}
