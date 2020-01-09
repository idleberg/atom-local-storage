module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const atom_1 = __webpack_require__(1);
const functions_1 = __webpack_require__(2);
var config_1 = __webpack_require__(22);
exports.config = config_1.config;
let subscriptions;
function activate() {
    return __awaiter(this, void 0, void 0, function* () {
        subscriptions = new atom_1.CompositeDisposable();
        subscriptions.add(atom.commands.add('atom-workspace', {
            'local-storage:open-item': () => functions_1.createListView('open')
        }));
        subscriptions.add(atom.commands.add('atom-workspace', {
            'local-storage:remove-item': () => functions_1.createListView('remove')
        }));
        subscriptions.add(atom.commands.add('atom-workspace', {
            'local-storage:save-item': () => functions_1.saveItem()
        }));
        atom.config.observe('local-storage.hideCloseIcon', hideCloseIcon => {
            if (hideCloseIcon) {
                functions_1.addPaneAttribute();
            }
            else {
                functions_1.removePaneAttribute();
            }
        });
    });
}
exports.activate = activate;
function deactivate() {
    subscriptions && subscriptions.dispose();
}
exports.deactivate = deactivate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTJDO0FBQzNDLDJDQUE4RjtBQUM5RixtQ0FBa0M7QUFBekIsMEJBQUEsTUFBTSxDQUFBO0FBRWYsSUFBSSxhQUE4QyxDQUFDO0FBRW5ELFNBQXNCLFFBQVE7O1FBRTVCLGFBQWEsR0FBRyxJQUFJLDBCQUFtQixFQUFFLENBQUM7UUFHMUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNwRCx5QkFBeUIsRUFBRSxHQUFHLEVBQUUsQ0FBQywwQkFBYyxDQUFDLE1BQU0sQ0FBQztTQUN4RCxDQUFDLENBQUMsQ0FBQztRQUVKLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUU7WUFDcEQsMkJBQTJCLEVBQUUsR0FBRyxFQUFFLENBQUMsMEJBQWMsQ0FBQyxRQUFRLENBQUM7U0FDNUQsQ0FBQyxDQUFDLENBQUM7UUFFSixhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO1lBQ3BELHlCQUF5QixFQUFFLEdBQUcsRUFBRSxDQUFDLG9CQUFRLEVBQUU7U0FDNUMsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxhQUFhLENBQUMsRUFBRTtZQUNqRSxJQUFJLGFBQWEsRUFBRTtnQkFDakIsNEJBQWdCLEVBQUUsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCwrQkFBbUIsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQUE7QUF4QkQsNEJBd0JDO0FBRUQsU0FBZ0IsVUFBVTtJQUN4QixhQUFhLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzNDLENBQUM7QUFGRCxnQ0FFQyJ9

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("atom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __webpack_require__(3);
const path_1 = __webpack_require__(4);
let storageEditors = [];
function createListView(action) {
    return __awaiter(this, void 0, void 0, function* () {
        const { selectListView } = yield Promise.resolve().then(() => __importStar(__webpack_require__(5)));
        const storageItems = Object.keys(localStorage).filter(key => filterKeys(key));
        if (storageItems === undefined)
            return;
        const selection = yield selectListView(storageItems);
        if (selection === undefined)
            return;
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
    });
}
exports.createListView = createListView;
function openItem(item) {
    const uri = isProject() ? item : path_1.join(os_1.tmpdir(), item);
    atom.workspace.open(uri).then(editor => {
        const debugMode = getConfig('debugMode');
        if (debugMode)
            console.log(`Opening '${item}' from localStorage`);
        let itemString = localStorage.getItem(item);
        if (!itemString)
            return;
        if (getConfig('detectJson')) {
            let itemObj;
            try {
                itemObj = JSON.parse(itemString);
            }
            catch (error) {
                if (debugMode)
                    console.warn(`"${itemString}" is not an object`);
            }
            if (typeof itemObj === 'object') {
                editor.setGrammar(atom.grammars.grammarForScopeName('source.json'));
                itemString = JSON.stringify(JSON.parse(itemString), null, 2);
            }
        }
        editor.setText(itemString);
        if (getConfig('hideCloseIcon')) {
            addPaneAttribute();
        }
        showPanel(editor);
    }).catch(error => {
        atom.notifications.addError(error.toString(), {
            dismissable: true
        });
    });
}
function saveItem() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor == null)
        return atom.beep();
    const title = editor.getTitle();
    let content = editor.getText();
    const scope = editor.getGrammar().scopeName;
    if (scope === 'source.json') {
        content = JSON.stringify(JSON.parse(content));
    }
    if (localStorage.getItem(title)) {
        return localStorage.setItem(title, content);
    }
    else {
        const notification = atom.notifications.addInfo(`The item \`${title}\` is currently not in your localStorage. Are you sure you want to create a new item?`, {
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
exports.saveItem = saveItem;
function removeItem(item) {
    const notification = atom.notifications.addWarning(`Do you really want to delete \`${item}\` from your localStorage?`, {
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
    const atomPanel = document.createElement('atom-panel');
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
    const saveButton = atomPanel.querySelector('.btn-primary');
    saveButton.addEventListener('click', saveItem);
    const closeButton = atomPanel.querySelector('.btn-default');
    closeButton.addEventListener('click', () => {
        const scope = editor.getGrammar().scopeName;
        const text = editor.getText();
        const item = localStorage.getItem(editor.getTitle());
        if (scope === 'source.json') {
            if (JSON.stringify(JSON.parse(text), null, 0) === item) {
                return closeEditor(editor);
            }
        }
        else {
            if (text === item) {
                return closeEditor(editor);
            }
        }
        const notification = atom.notifications.addInfo(`This localStorage item has changes, do you really want to discard them?`, {
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
    atom.workspace.addBottomPanel({ item: atomPanel });
    atom.workspace.onDidChangeActiveTextEditor(editor => toggleEditorPanel(editor));
    editor.onDidDestroy(() => {
        removePanel(editor.id);
    });
    toggleEditorPanel(editor);
}
function toggleEditorPanel(editor) {
    hidePanels();
    if (!editor)
        return;
    const elem = document.querySelector(`[data-local-storage="${editor.id}"]`);
    if (elem && elem.parentNode) {
        const parentNode = elem.parentNode;
        if (parentNode) {
            parentNode.style.display = (editor && storageEditors.includes(editor.id)) ? 'block' : 'none';
        }
    }
}
function removePanel(id) {
    const controls = document.querySelector(`[data-local-storage="${id}"`);
    if (controls && controls.parentNode) {
        controls.parentNode.removeChild(controls);
    }
}
function hidePanels() {
    const controls = document.querySelectorAll('[data-local-storage]');
    if (controls.length) {
        controls.forEach(control => {
            const parentNode = control.parentNode;
            if (parentNode) {
                parentNode.style.display = 'none';
            }
        });
    }
}
function filterKeys(key) {
    const { installedPackages, settingsView, treeView, releaseNotes, metricsID, emptyItems, nullItems } = getConfig('filteredItems');
    const value = localStorage.getItem(key) || '';
    if ((installedPackages === false || !key.startsWith('installed-packages:')) &&
        (settingsView === false || !key.startsWith('settings-view:')) &&
        (treeView === false || !key.startsWith('tree-view:')) &&
        (releaseNotes === false || !key.startsWith('release-notes:')) &&
        (metricsID === false || key !== 'metrics.userId') &&
        (emptyItems === false || !['[]', '{}', ''].includes(value)) &&
        (nullItems === false || value !== 'null')) {
        return true;
    }
    else {
        if (getConfig('debugMode'))
            console.log(`Skipping '${key}'`);
        return false;
    }
}
exports.filterKeys = filterKeys;
function closeEditor(editor) {
    const index = storageEditors.indexOf(editor.id);
    storageEditors.splice(index, 1);
    removePanel(editor.id);
    editor.destroy();
}
function getConfig(key = '') {
    return atom.config.get(`local-storage.${key}`);
}
exports.getConfig = getConfig;
function createHTML(key) {
    const value = localStorage.getItem(key);
    const icon = getIcon(key);
    if (getConfig('displayBadge')) {
        const badgeStyle = getBadgeStyle(value);
        const badgeText = getBadgeText(value);
        return `
      ${icon}
      <div class=\"pull-right\">
        <code class=\"badge badge-${badgeStyle}\">${badgeText}</code>
      </div>
    `;
    }
    return `${icon}`;
}
exports.createHTML = createHTML;
function getIcon(key) {
    if (!getConfig('displayIcon')) {
        return key;
    }
    let icon;
    if (key.startsWith('installed-packages:')) {
        icon = 'package';
    }
    else if (key.startsWith('settings-view:')) {
        icon = 'tools';
    }
    else if (key.startsWith('tree-view:')) {
        icon = 'list-unordered';
    }
    else if (key.startsWith('release-notes')) {
        icon = 'megaphone';
    }
    else if (key === 'defaultWindowDimensions') {
        icon = 'browser';
    }
    else if (key === 'hasSeenDeprecatedNotification') {
        icon = 'checklist';
    }
    else if (key === 'history') {
        icon = 'clock';
    }
    else if (key === 'metrics.userId') {
        icon = 'dashboard';
    }
    else {
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
    const projectPaths = atom.project.getPaths();
    return projectPaths.length > 0 ? true : false;
}
function addPaneAttribute() {
    const panes = atom.workspace.getPanes();
    panes.forEach(pane => {
        const view = atom.views.getView(pane);
        view.setAttribute('data-local-storage-pane', '');
    });
}
exports.addPaneAttribute = addPaneAttribute;
function removePaneAttribute() {
    const panes = atom.workspace.getPanes();
    panes.forEach(pane => {
        const view = atom.views.getView(pane);
        view.removeAttribute('data-local-storage-pane');
    });
}
exports.removePaneAttribute = removePaneAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQkFBNEI7QUFDNUIsK0JBQTRCO0FBRTVCLElBQUksY0FBYyxHQUFhLEVBQUUsQ0FBQztBQUVsQyxTQUFlLGNBQWMsQ0FBQyxNQUFNOztRQUNsQyxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsd0RBQWEsUUFBUSxHQUFDLENBQUM7UUFDbEQsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUvRSxJQUFJLFlBQVksS0FBSyxTQUFTO1lBQUUsT0FBTztRQUV2QyxNQUFNLFNBQVMsR0FBRyxNQUFNLGNBQWMsQ0FDcEMsWUFBWSxDQUNiLENBQUM7UUFFRixJQUFJLFNBQVMsS0FBSyxTQUFTO1lBQUUsT0FBTztRQUVwQyxRQUFRLE1BQU0sRUFBRTtZQUNkLEtBQUssTUFBTTtnQkFDVCxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU07WUFFUixLQUFLLFFBQVE7Z0JBQ1gsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN0QixNQUFNO1lBRVI7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQztDQUFBO0FBc1hDLHdDQUFjO0FBcFhoQixTQUFTLFFBQVEsQ0FBQyxJQUFJO0lBQ3BCLE1BQU0sR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQUksQ0FBQyxXQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV0RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFDLEVBQUU7UUFDdEMs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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const atom_select_list_1 = __importDefault(__webpack_require__(6));
const functions_1 = __webpack_require__(2);
function selectListView(items) {
    return __awaiter(this, void 0, void 0, function* () {
        let panel;
        const currentFocus = document.activeElement;
        try {
            return yield new Promise(resolve => {
                const select = new atom_select_list_1.default({
                    items,
                    elementForItem: (item) => {
                        const li = document.createElement('li');
                        li.innerHTML = functions_1.createHTML(item);
                        return li;
                    },
                    didCancelSelection: () => {
                        resolve();
                    },
                    didConfirmSelection: (item) => {
                        resolve(item);
                    }
                });
                panel = atom.workspace.addModalPanel({
                    item: select,
                    visible: true,
                });
                select.focus();
            });
        }
        finally {
            if (panel)
                panel.destroy();
            if (currentFocus)
                currentFocus.focus();
        }
    });
}
exports.selectListView = selectListView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esd0VBQThDO0FBQzlDLDJDQUF5QztBQUd6QyxTQUFzQixjQUFjLENBQ2xDLEtBQWU7O1FBRWYsSUFBSSxLQUFnRCxDQUFDO1FBQ3JELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFtQyxDQUFDO1FBRWxFLElBQUk7WUFDRixPQUFPLE1BQU0sSUFBSSxPQUFPLENBQXNCLE9BQU8sQ0FBQyxFQUFFO2dCQUN0RCxNQUFNLE1BQU0sR0FBMkIsSUFBSSwwQkFBYyxDQUFDO29CQUN4RCxLQUFLO29CQUNMLGNBQWMsRUFBRSxDQUFDLElBQVksRUFBRSxFQUFFO3dCQUMvQixNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN4QyxFQUFFLENBQUMsU0FBUyxHQUFHLHNCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBRWhDLE9BQU8sRUFBRSxDQUFDO29CQUNaLENBQUM7b0JBQ0Qsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO3dCQUN2QixPQUFPLEVBQUUsQ0FBQztvQkFDWixDQUFDO29CQUNELG1CQUFtQixFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7d0JBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEIsQ0FBQztpQkFDRixDQUFDLENBQUM7Z0JBRUgsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO29CQUNuQyxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsSUFBSTtpQkFDZCxDQUFDLENBQUM7Z0JBRUgsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7Z0JBQVM7WUFDUixJQUFJLEtBQUs7Z0JBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNCLElBQUksWUFBWTtnQkFBRSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEM7SUFDSCxDQUFDO0NBQUE7QUFuQ0Qsd0NBbUNDIn0=

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const {Disposable, CompositeDisposable, TextEditor} = __webpack_require__(1)
const etch = __webpack_require__(7)
const $ = etch.dom
const fuzzaldrin = __webpack_require__(18)

module.exports = class SelectListView {
  static setScheduler (scheduler) {
    etch.setScheduler(scheduler)
  }

  static getScheduler (scheduler) {
    return etch.getScheduler()
  }

  constructor (props) {
    this.props = props
    if (!this.props.hasOwnProperty('initialSelectionIndex')) {
      this.props.initialSelectionIndex = 0
    }
    if (props.initiallyVisibleItemCount) {
      this.initializeVisibilityObserver()
    }
    this.computeItems(false)
    this.disposables = new CompositeDisposable()
    etch.initialize(this)
    this.element.classList.add('select-list')
    this.disposables.add(this.refs.queryEditor.onDidChange(this.didChangeQuery.bind(this)))
    if (!props.skipCommandsRegistration) {
      this.disposables.add(this.registerAtomCommands())
    }
    const editorElement = this.refs.queryEditor.element
    const didLoseFocus = this.didLoseFocus.bind(this)
    editorElement.addEventListener('blur', didLoseFocus)

    // When clicking the scrollbar of the items list, a blur event will be triggered
    // on the query editor element, but we don't want to treat that as a cancellation.
    // This mousedown listener allows us to detect this case and restore focus to the
    // query editor. This is based on https://stackoverflow.com/a/1480178.
    this.didClickItemsList = false
    this.element.addEventListener('mousedown', event => {
      if (event.target === this.refs.items) {
        this.didClickItemsList = true
      }
    })
    this.disposables.add(new Disposable(() => { editorElement.removeEventListener('blur', didLoseFocus) }))
  }

  initializeVisibilityObserver () {
    this.visibilityObserver = new IntersectionObserver(changes => {
      for (const change of changes) {
        if (change.intersectionRatio > 0) {
          const element = change.target
          this.visibilityObserver.unobserve(element)
          const index = Array.from(this.refs.items.children).indexOf(element)
          if (index >= 0) {
            this.renderItemAtIndex(index)
          }
        }
      }
    })
  }

  focus () {
    this.refs.queryEditor.element.focus()
  }

  didLoseFocus (event) {
    if (this.didClickItemsList || this.element.contains(event.relatedTarget)) {
      this.didClickItemsList = false
      this.refs.queryEditor.element.focus()
    } else if (document.hasFocus()) {
      this.cancelSelection()
    }
  }

  reset () {
    this.refs.queryEditor.setText('')
  }

  destroy () {
    this.disposables.dispose()
    if (this.visibilityObserver) this.visibilityObserver.disconnect()
    return etch.destroy(this)
  }

  registerAtomCommands () {
    return global.atom.commands.add(this.element, {
      'core:move-up': (event) => {
        this.selectPrevious()
        event.stopPropagation()
      },
      'core:move-down': (event) => {
        this.selectNext()
        event.stopPropagation()
      },
      'core:move-to-top': (event) => {
        this.selectFirst()
        event.stopPropagation()
      },
      'core:move-to-bottom': (event) => {
        this.selectLast()
        event.stopPropagation()
      },
      'core:confirm': (event) => {
        this.confirmSelection()
        event.stopPropagation()
      },
      'core:cancel': (event) => {
        this.cancelSelection()
        event.stopPropagation()
      }
    })
  }

  update (props = {}) {
    let shouldComputeItems = false

    if (props.hasOwnProperty('items')) {
      this.props.items = props.items
      shouldComputeItems = true
    }

    if (props.hasOwnProperty('maxResults')) {
      this.props.maxResults = props.maxResults
      shouldComputeItems = true
    }

    if (props.hasOwnProperty('filter')) {
      this.props.filter = props.filter
      shouldComputeItems = true
    }

    if (props.hasOwnProperty('filterQuery')) {
      this.props.filterQuery = props.filterQuery
      shouldComputeItems = true
    }

    if (props.hasOwnProperty('query')) {
      // Items will be recomputed as part of the change event handler, so we
      // don't need to recompute them again at the end of this function.
      this.refs.queryEditor.setText(props.query)
      shouldComputeItems = false
    }

    if (props.hasOwnProperty('selectQuery')) {
      if (props.selectQuery) {
        this.refs.queryEditor.selectAll()
      } else {
        this.refs.queryEditor.clearSelections()
      }
    }

    if (props.hasOwnProperty('order')) {
      this.props.order = props.order
    }

    if (props.hasOwnProperty('emptyMessage')) {
      this.props.emptyMessage = props.emptyMessage
    }

    if (props.hasOwnProperty('errorMessage')) {
      this.props.errorMessage = props.errorMessage
    }

    if (props.hasOwnProperty('infoMessage')) {
      this.props.infoMessage = props.infoMessage
    }

    if (props.hasOwnProperty('loadingMessage')) {
      this.props.loadingMessage = props.loadingMessage
    }

    if (props.hasOwnProperty('loadingBadge')) {
      this.props.loadingBadge = props.loadingBadge
    }

    if (props.hasOwnProperty('itemsClassList')) {
      this.props.itemsClassList = props.itemsClassList
    }

    if (props.hasOwnProperty('initialSelectionIndex')) {
      this.props.initialSelectionIndex = props.initialSelectionIndex
    }

    if (shouldComputeItems) {
      this.computeItems()
    }

    return etch.update(this)
  }

  render () {
    return $.div(
      {},
      $(TextEditor, {ref: 'queryEditor', mini: true}),
      this.renderLoadingMessage(),
      this.renderInfoMessage(),
      this.renderErrorMessage(),
      this.renderItems()
    )
  }

  renderItems () {
    if (this.items.length > 0) {
      const className = ['list-group'].concat(this.props.itemsClassList || []).join(' ')

      if (this.visibilityObserver) {
        etch.getScheduler().updateDocument(() => {
          Array.from(this.refs.items.children).slice(this.props.initiallyVisibleItemCount).forEach(element => {
            this.visibilityObserver.observe(element)
          })
        })
      }

      this.listItems = this.items.map((item, index) => {
        const selected = this.getSelectedItem() === item
        const visible = !this.props.initiallyVisibleItemCount || index < this.props.initiallyVisibleItemCount
        return $(ListItemView, {
          element: this.props.elementForItem(item, {selected, index, visible}),
          selected: selected,
          onclick: () => this.didClickItem(index)
        })
      })

      return $.ol(
        {className, ref: 'items'},
        ...this.listItems
      )
    } else if (!this.props.loadingMessage && this.props.emptyMessage) {
      return $.span({ref: 'emptyMessage'}, this.props.emptyMessage)
    } else {
      return ""
    }
  }

  renderErrorMessage () {
    if (this.props.errorMessage) {
      return $.span({ref: 'errorMessage'}, this.props.errorMessage)
    } else {
      return ''
    }
  }

  renderInfoMessage () {
    if (this.props.infoMessage) {
      return $.span({ref: 'infoMessage'}, this.props.infoMessage)
    } else {
      return ''
    }
  }

  renderLoadingMessage () {
    if (this.props.loadingMessage) {
      return $.div(
        {className: 'loading'},
        $.span({ref: 'loadingMessage', className: 'loading-message'}, this.props.loadingMessage),
        this.props.loadingBadge ? $.span({ref: 'loadingBadge', className: 'badge'}, this.props.loadingBadge) : ''
      )
    } else {
      return ''
    }
  }

  getQuery () {
    if (this.refs && this.refs.queryEditor) {
      return this.refs.queryEditor.getText()
    } else {
      return ''
    }
  }

  getFilterQuery () {
    return this.props.filterQuery ? this.props.filterQuery(this.getQuery()) : this.getQuery()
  }

  didChangeQuery () {
    if (this.props.didChangeQuery) {
      this.props.didChangeQuery(this.getFilterQuery())
    }

    this.computeItems()
  }

  didClickItem (itemIndex) {
    this.selectIndex(itemIndex)
    this.confirmSelection()
  }

  computeItems (updateComponent) {
    this.listItems = null
    if (this.visibilityObserver) this.visibilityObserver.disconnect()
    const filterFn = this.props.filter || this.fuzzyFilter.bind(this)
    this.items = filterFn(this.props.items.slice(), this.getFilterQuery())
    if (this.props.order) {
      this.items.sort(this.props.order)
    }
    if (this.props.maxResults) {
      this.items = this.items.slice(0, this.props.maxResults)
    }

    this.selectIndex(this.props.initialSelectionIndex, updateComponent)
  }

  fuzzyFilter (items, query) {
    if (query.length === 0) {
      return items
    } else {
      const scoredItems = []
      for (const item of items) {
        const string = this.props.filterKeyForItem ? this.props.filterKeyForItem(item) : item
        let score = fuzzaldrin.score(string, query)
        if (score > 0) {
          scoredItems.push({item, score})
        }
      }
      scoredItems.sort((a, b) => b.score - a.score)
      return scoredItems.map((i) => i.item)
    }
  }

  getSelectedItem () {
    if (this.selectionIndex === undefined) return null
    return this.items[this.selectionIndex]
  }

  renderItemAtIndex (index) {
    const item = this.items[index]
    const selected = this.getSelectedItem() === item
    const component = this.listItems[index].component
    if (this.visibilityObserver) this.visibilityObserver.unobserve(component.element)
    component.update({
      element: this.props.elementForItem(item, {selected, index, visible: true}),
      selected: selected,
      onclick: () => this.didClickItem(index)
    })
  }

  selectPrevious () {
    if (this.selectionIndex === undefined) return this.selectLast()
    return this.selectIndex(this.selectionIndex - 1)
  }

  selectNext () {
    if (this.selectionIndex === undefined) return this.selectFirst()
    return this.selectIndex(this.selectionIndex + 1)
  }

  selectFirst () {
    return this.selectIndex(0)
  }

  selectLast () {
    return this.selectIndex(this.items.length - 1)
  }

  selectNone () {
    return this.selectIndex(undefined)
  }

  selectIndex (index, updateComponent = true) {
    if (index >= this.items.length) {
      index = 0
    } else if (index < 0) {
      index = this.items.length - 1
    }

    const oldIndex = this.selectionIndex

    this.selectionIndex = index
    if (index !== undefined && this.props.didChangeSelection) {
      this.props.didChangeSelection(this.getSelectedItem())
    }

    if (updateComponent) {
      if (this.listItems) {
        if (oldIndex >= 0) this.renderItemAtIndex(oldIndex)
        if (index >= 0) this.renderItemAtIndex(index)
        return etch.getScheduler().getNextUpdatePromise()
      } else {
        return etch.update(this)
      }
    } else {
      return Promise.resolve()
    }
  }

  selectItem (item) {
    const index = this.items.indexOf(item)
    if (index === -1) {
      throw new Error('Cannot select the specified item because it does not exist.')
    } else {
      return this.selectIndex(index)
    }
  }

  confirmSelection () {
    const selectedItem = this.getSelectedItem()
    if (selectedItem != null) {
      if (this.props.didConfirmSelection) {
        this.props.didConfirmSelection(selectedItem)
      }
    } else {
      if (this.props.didConfirmEmptySelection) {
        this.props.didConfirmEmptySelection()
      }
    }
  }

  cancelSelection () {
    if (this.props.didCancelSelection) {
      this.props.didCancelSelection()
    }
  }
}

class ListItemView {
  constructor (props) {
    this.mouseDown = this.mouseDown.bind(this)
    this.mouseUp = this.mouseUp.bind(this)
    this.didClick = this.didClick.bind(this)
    this.selected = props.selected
    this.onclick = props.onclick
    this.element = props.element
    this.element.addEventListener('mousedown', this.mouseDown)
    this.element.addEventListener('mouseup', this.mouseUp)
    this.element.addEventListener('click', this.didClick)
    if (this.selected) {
      this.element.classList.add('selected')
    }
    this.domEventsDisposable = new Disposable(() => {
      this.element.removeEventListener('mousedown', this.mouseDown)
      this.element.removeEventListener('mouseup', this.mouseUp)
      this.element.removeEventListener('click', this.didClick)
    })
    etch.getScheduler().updateDocument(this.scrollIntoViewIfNeeded.bind(this))
  }

  mouseDown (event) {
    event.preventDefault()
  }

  mouseUp (event) {
    event.preventDefault()
  }

  didClick (event) {
    event.preventDefault()
    this.onclick()
  }

  destroy () {
    this.element.remove()
    this.domEventsDisposable.dispose()
  }

  update (props) {
    this.element.removeEventListener('mousedown', this.mouseDown)
    this.element.removeEventListener('mouseup', this.mouseUp)
    this.element.removeEventListener('click', this.didClick)

    this.element.parentNode.replaceChild(props.element, this.element)
    this.element = props.element
    this.element.addEventListener('mousedown', this.mouseDown)
    this.element.addEventListener('mouseup', this.mouseUp)
    this.element.addEventListener('click', this.didClick)
    if (props.selected) {
      this.element.classList.add('selected')
    }

    this.selected = props.selected
    this.onclick = props.onclick
    etch.getScheduler().updateDocument(this.scrollIntoViewIfNeeded.bind(this))
  }

  scrollIntoViewIfNeeded () {
    if (this.selected) {
      this.element.scrollIntoViewIfNeeded(false)
    }
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const dom = __webpack_require__(8)
const render = __webpack_require__(11)
const {initialize, update, updateSync, destroy, destroySync} = __webpack_require__(14)
const {setScheduler, getScheduler} = __webpack_require__(16)

module.exports = {
  dom, render,
  initialize, update, updateSync, destroy, destroySync,
  setScheduler, getScheduler
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const EVENT_LISTENER_PROPS = __webpack_require__(9)
const SVG_TAGS = __webpack_require__(10)

function dom (tag, props, ...children) {
  for (let i = 0; i < children.length;) {
    const child = children[i]
    switch (typeof child) {
      case 'string':
      case 'number':
        children[i] = {text: child}
        i++
        break;

      case 'object':
        if (Array.isArray(child)) {
          children.splice(i, 1, ...child)
        } else if (!child) {
          children.splice(i, 1)
        } else {
          i++
        }
        break;

      default:
        throw new Error(`Invalid child node: ${child}`)
    }
  }

  if (props) {
    for (const propName in props) {
      const eventName = EVENT_LISTENER_PROPS[propName]
      if (eventName) {
        if (!props.on) props.on = {}
        props.on[eventName] = props[propName]
      }
    }

    if (props.class) {
      props.className = props.class
    }
  }

  return {tag, props, children}
}

const HTML_TAGS = [
  'a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo',
  'blockquote', 'body', 'button', 'canvas', 'caption', 'cite', 'code',
  'colgroup', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl',
  'dt', 'em', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2',
  'h3', 'h4', 'h5', 'h6', 'head', 'header', 'html', 'i', 'iframe', 'ins', 'kbd',
  'label', 'legend', 'li', 'main', 'map', 'mark', 'menu', 'meter', 'nav',
  'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'pre',
  'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section',
  'select', 'small', 'span', 'strong', 'style', 'sub', 'summary', 'sup',
  'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title',
  'tr', 'u', 'ul', 'var', 'video', 'area', 'base', 'br', 'col', 'command',
  'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source',
  'track', 'wbr'
]

for (const tagName of HTML_TAGS) {
  dom[tagName] = (props, ...children) => {
    return dom(tagName, props, ...children)
  }
}

for (const tagName of SVG_TAGS) {
  dom[tagName] = (props, ...children) => {
    return dom(tagName, props, ...children)
  }
}


module.exports = dom


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  onCopy: 'copy',
  onCut: 'cut',
  onPaste: 'paste',
  onCompositionEnd: 'compositionend',
  onCompositionStart: 'compositionstart',
  onCompositionUpdate: 'compositionupdate',
  onKeyDown: 'keydown',
  onKeyPress: 'keypress',
  onKeyUp: 'keyup',
  onFocus: 'focus',
  onBlur: 'blur',
  onChange: 'change',
  onInput: 'input',
  onSubmit: 'submit',
  onClick: 'click',
  onContextMenu: 'contextmenu',
  onDoubleClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragEnter: 'dragenter',
  onDragExit: 'dragexit',
  onDragLeave: 'dragleave',
  onDragOver: 'dragover',
  onDragStart: 'dragstart',
  onDrop: 'drop',
  onMouseDown: 'mousedown',
  onMouseEnter: 'mouseenter',
  onMouseLeave: 'mouseleave',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onSelect: 'select',
  onTouchCancel: 'touchcancel',
  onTouchEnd: 'touchend',
  onTouchMove: 'touchmove',
  onTouchStart: 'touchstart',
  onScroll: 'scroll',
  onWheel: 'wheel',
  onAbort: 'abort',
  onCanPlay: 'canplay',
  onCanPlayThrough: 'canplaythrough',
  onDurationChange: 'durationchange',
  onEmptied: 'emptied',
  onEncrypted: 'encrypted',
  onEnded: 'ended',
  onError: 'error',
  onLoadedData: 'loadeddata',
  onLoadedMetadata: 'loadedmetadata',
  onLoadStart: 'loadstart',
  onPause: 'pause',
  onPlay: 'play',
  onPlaying: 'playing',
  onProgress: 'progress',
  onRateChange: 'ratechange',
  onSeeked: 'seeked',
  onSeeking: 'seeking',
  onStalled: 'stalled',
  onSuspend: 'suspend',
  onTimeUpdate: 'timeupdate',
  onVolumeChange: 'volumechange',
  onWaiting: 'waiting',
  onLoad: 'load',
  onAnimationStart: 'animationstart',
  onAnimationEnd: 'animationend',
  onAnimationIteration: 'animationiteration',
  onTransitionEnd: 'transitionend'
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// taken from https://github.com/facebook/react/blob/67f8524e88abbf1ac0fd86d38a0477d11fbc7b3e/src/isomorphic/classic/element/ReactDOMFactories.js#L153
module.exports = new Set([
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'g',
  'image',
  'line',
  'linearGradient',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'tspan'
])


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const updateProps = __webpack_require__(12)
const SVG_TAGS = __webpack_require__(10)

function render (virtualNode, options) {
  let domNode
  if (virtualNode.text != null) {
    domNode = document.createTextNode(virtualNode.text)
  } else {
    const {tag, children} = virtualNode
    let {props} = virtualNode

    if (typeof tag === 'function') {
      let ref
      if (props && props.ref) {
        ref = props.ref
      }
      const component = new tag(props || {}, children)
      virtualNode.component = component
      domNode = component.element
      if (options && options.refs && ref) {
        options.refs[ref] = component
      }
    } else if (SVG_TAGS.has(tag)) {
      domNode = document.createElementNS("http://www.w3.org/2000/svg", tag);
      if (children) addChildren(domNode, children, options)
      if (props) updateProps(domNode, null, virtualNode, options)
    } else {
      domNode = document.createElement(tag)
      if (children) addChildren(domNode, children, options)
      if (props) updateProps(domNode, null, virtualNode, options)
    }
  }
  virtualNode.domNode = domNode
  return domNode
}

function addChildren (parent, children, options) {
  for (let i = 0; i < children.length; i++) {
    parent.appendChild(render(children[i], options))
  }
}

module.exports = render


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const EVENT_LISTENER_PROPS = __webpack_require__(9)
const SVG_TAGS = __webpack_require__(10)
const SVG_ATTRIBUTE_TRANSLATIONS = __webpack_require__(13)
const EMPTY = ''

module.exports = function (domNode, oldVirtualNode, newVirtualNode, options) {
  const oldProps = oldVirtualNode && oldVirtualNode.props
  const newProps = newVirtualNode.props

  let refs, listenerContext
  if (options) {
    refs = options.refs
    listenerContext = options.listenerContext
  }
  updateProps(domNode, oldVirtualNode, oldProps, newVirtualNode, newProps)
  if (refs) updateRef(domNode, oldProps && oldProps.ref, newProps && newProps.ref, refs)
  updateEventListeners(domNode, oldVirtualNode, newVirtualNode, listenerContext)
}

// Using var to avoid "Unsupported phi use of variable" deoptimization in Chrome 56
function updateProps (domNode, oldVirtualNode, oldProps, newVirtualNode, newProps) {
  if (oldProps) {
    for (var name in oldProps) {
      if (name === 'ref' || name === 'on') continue
      if (name in EVENT_LISTENER_PROPS) continue
      if (!newProps || !(name in newProps)) {
        if (name === 'dataset') {
          updateProps(domNode.dataset, null, oldProps && oldProps.dataset, null, null)
        } else if (name !== 'innerHTML' && oldVirtualNode && SVG_TAGS.has(oldVirtualNode.tag)) {
          domNode.removeAttribute(SVG_ATTRIBUTE_TRANSLATIONS.get(name) || name)
        } else {
          // Clear property for objects that don't support deletion (e.g. style
          // or className). If we used null instead of an empty string, the DOM
          // could sometimes stringify the value and mistakenly assign 'null'.
          domNode[name] = EMPTY
          delete domNode[name]
        }
      }
    }
  }

  if (newProps) {
    for (var name in newProps) {
      if (name === 'ref' || name === 'on') continue
      if (name in EVENT_LISTENER_PROPS) continue
      var oldValue = oldProps && oldProps[name]
      var newValue = newProps[name]
      if (name === 'dataset') {
        updateNestedProps(domNode.dataset, oldValue, newValue, false)
      } else if (name === 'style' && typeof newValue !== 'string') {
        if (typeof oldValue === 'string') {
          domNode.style = ''
          oldValue = null
        }
        updateNestedProps(domNode.style, oldValue, newValue, true)
      } else if (name === 'attributes') {
        updateAttributes(domNode, oldValue, newValue)
      } else {
        if (newValue !== oldValue) {
          if (name !== 'innerHTML' && newVirtualNode && SVG_TAGS.has(newVirtualNode.tag)) {
            domNode.setAttribute(SVG_ATTRIBUTE_TRANSLATIONS.get(name) || name, newValue)
          } else if (newVirtualNode && newVirtualNode.tag === 'input'
            && name === 'value' && domNode[name] === newValue) {
            // Do not update `value` of an `input` unless it differs.
            // Every change will reset the cursor position.
          } else {
            domNode[name] = newValue
          }
        }
      }
    }
  }
}

function updateNestedProps (domProps, oldProps, newProps, isStyleObject) {
  if (oldProps) {
    for (var name in oldProps) {
      if (!newProps || !(name in newProps)) {
        if (isStyleObject) {
          domProps[name] = EMPTY
        } else {
          delete domProps[name]
        }
      }
    }
  }

  if (newProps) {
    for (var name in newProps) {
      const oldValue = oldProps && oldProps[name]
      const newValue = newProps[name]
      if (newValue !== oldValue) {
        domProps[name] = newValue
      }
    }
  }
}

function updateAttributes (domNode, oldAttributes, newAttributes) {
  if (oldAttributes) {
    for (var name in oldAttributes) {
      if (!newAttributes || !(name in newAttributes)) {
        domNode.removeAttribute(name)
      }
    }
  }

  if (newAttributes) {
    for (var name in newAttributes) {
      const oldValue = oldAttributes && oldAttributes[name]
      const newValue = newAttributes[name]
      if (newValue !== oldValue) {
        domNode.setAttribute(name, newValue)
      }
    }
  }
}

function updateRef (domNode, oldRefName, newRefName, refs) {
  if (newRefName !== oldRefName) {
    if (oldRefName && refs[oldRefName] === domNode) delete refs[oldRefName]
    if (newRefName) refs[newRefName] = domNode
  }
}

function updateEventListeners (domNode, oldVirtualNode, newVirtualNode, listenerContext) {
  const oldListeners = oldVirtualNode && oldVirtualNode.props && oldVirtualNode.props.on
  const newListeners = newVirtualNode.props && newVirtualNode.props.on

  for (const eventName in oldListeners) {
    if (!(newListeners && eventName in newListeners)) {
      let listenerToRemove
      if (oldVirtualNode && oldVirtualNode.boundListeners && oldVirtualNode.boundListeners[eventName]) {
        listenerToRemove = oldVirtualNode.boundListeners[eventName]
      } else {
        listenerToRemove = oldListeners[eventName]
      }
      domNode.removeEventListener(eventName, listenerToRemove)
    }
  }

  for (const eventName in newListeners) {
    const oldListener = oldListeners && oldListeners[eventName]
    const newListener = newListeners[eventName]

    if (newListener !== oldListener) {
      if (oldListener) {
        let listenerToRemove
        if (oldVirtualNode && oldVirtualNode.boundListeners && oldVirtualNode.boundListeners[eventName]) {
          listenerToRemove = oldVirtualNode.boundListeners[eventName]
        } else {
          listenerToRemove = oldListener
        }
        domNode.removeEventListener(eventName, listenerToRemove)
      }
      if (newListener) {
        let listenerToAdd
        if (listenerContext) {
          listenerToAdd = newListener.bind(listenerContext)
          if (!newVirtualNode.boundListeners) newVirtualNode.boundListeners = {}
          newVirtualNode.boundListeners[eventName] = listenerToAdd
        } else {
          listenerToAdd = newListener
        }
        domNode.addEventListener(eventName, listenerToAdd)
      }
    }
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// Based on https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
module.exports = new Map([
  ['accentHeight', 'accent-height'],
  ['alignmentBaseline', 'alignment-baseline'],
  ['arabicForm', 'arabic-form'],
  ['baselineShift', 'baseline-shift'],
  ['capHeight', 'cap-height'],
  ['className', 'class'],
  ['clipPath', 'clip-path'],
  ['clipRule', 'clip-rule'],
  ['colorInterpolation', 'color-interpolation'],
  ['colorInterpolationFilters', 'color-interpolation-filters'],
  ['colorProfile', 'color-profile'],
  ['colorRendering', 'color-rendering'],
  ['dominantBaseline', 'dominant-baseline'],
  ['enableBackground', 'enable-background'],
  ['fillOpacity', 'fill-opacity'],
  ['fillRule', 'fill-rule'],
  ['floodColor', 'flood-color'],
  ['floodOpacity', 'flood-opacity'],
  ['fontFamily', 'font-family'],
  ['fontSize', 'font-size'],
  ['fontSizeAdjust', 'font-size-adjust'],
  ['fontStretch', 'font-stretch'],
  ['fontStyle', 'font-style'],
  ['fontVariant', 'font-variant'],
  ['fontWeight', 'font-weight'],
  ['glyphName', 'glyph-name'],
  ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
  ['glyphOrientationVertical', 'glyph-orientation-vertical'],
  ['horizAdvX', 'horiz-adv-x'],
  ['horizOriginX', 'horiz-origin-x'],
  ['letterSpacing', 'letter-spacing'],
  ['lightingColor', 'lighting-color'],
  ['markerEnd', 'marker-end'],
  ['markerMid', 'marker-mid'],
  ['markerStart', 'marker-start'],
  ['overlinePosition', 'overline-position'],
  ['overlineThickness', 'overline-thickness'],
  ['panose1', 'panose-1'],
  ['paintOrder', 'paint-order'],
  ['pointerEvents', 'pointer-events'],
  ['renderingIntent', 'rendering-intent'],
  ['shapeRendering', 'shape-rendering'],
  ['stopColor', 'stop-color'],
  ['stopOpacity', 'stop-opacity'],
  ['strikethroughPosition', 'strikethrough-position'],
  ['strikethroughThickness', 'strikethrough-thickness'],
  ['strokeDasharray', 'stroke-dasharray'],
  ['strokeDashoffset', 'stroke-dashoffset'],
  ['strokeLinecap', 'stroke-linecap'],
  ['strokeLinejoin', 'stroke-linejoin'],
  ['strokeMiterlimit', 'stroke-miterlimit'],
  ['strokeOpacity', 'stroke-opacity'],
  ['strokeWidth', 'stroke-width'],
  ['textAnchor', 'text-anchor'],
  ['textDecoration', 'text-decoration'],
  ['textRendering', 'text-rendering'],
  ['underlinePosition', 'underline-position'],
  ['underlineThickness', 'underline-thickness'],
  ['unicodeBidi', 'unicode-bidi'],
  ['unicodeRange', 'unicode-range'],
  ['unitsPerEm', 'units-per-em'],
  ['vAlphabetic', 'v-alphabetic'],
  ['vHanging', 'v-hanging'],
  ['vIdeographic', 'v-ideographic'],
  ['vMathematical', 'v-mathematical'],
  ['vertAdvY', 'vert-adv-y'],
  ['vertOriginX', 'vert-origin-x'],
  ['vertOriginY', 'vert-origin-y'],
  ['wordSpacing', 'word-spacing'],
  ['writingMode', 'writing-mode'],
  ['xHeight', 'x-height'],
])


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const render = __webpack_require__(11)
const patch = __webpack_require__(15)
const {getScheduler} = __webpack_require__(16)

const componentsWithPendingUpdates = new WeakSet()
let syncUpdatesInProgressCounter = 0
let syncDestructionsInProgressCounter = 0

function isValidVirtualNode (virtualNode) {
  return virtualNode != null && virtualNode !== false
}

// This function associates a component object with a DOM element by calling
// the components `render` method, assigning an `.element` property on the
// object and also returning the element.
//
// It also assigns a `virtualNode` property based on the return value of the
// `render` method. This will be used later by `performElementUpdate` to diff
// the new results of `render` with the previous results when updating the
// component's element.
//
// Finally, this function also associates the component with a `refs` object,
// which is populated with references to elements based on `ref` properties on
// nodes of the `virtual-dom` tree. Before calling into `virtual-dom` to create
// the DOM tree, it pushes this `refs` object to a shared stack so it can be
// accessed by hooks during the creation of individual elements.
function initialize(component) {
  if (typeof component.update !== 'function') {
    throw new Error('Etch components must implement `update(props, children)`.')
  }

  let virtualNode = component.render()
  if (!isValidVirtualNode(virtualNode)) {
    let namePart = component.constructor && component.constructor.name ? ' in ' + component.constructor.name : ''
    throw new Error('invalid falsy value ' + virtualNode + ' returned from render()' + namePart)
  }

  component.refs = {}
  component.virtualNode = virtualNode
  component.element = render(component.virtualNode, {
    refs: component.refs, listenerContext: component
  })
}

// This function receives a component that has already been associated with an
// element via a previous call to `initialize` and updates this element by
// calling `render` on the component.
//
// When called in normal circumstances, it uses the scheduler to defer this
// update until the next animation frame, and will only perform one update of a
// given component in a given frame. This means you can call `update`
// repeatedly in a given tick without causing redundant updates.
//
// If this function called during another synchronous update (for example, as a
// result of a call to `update` on a child component), the update is performed
// synchronously.
//
// Returns a promise that will resolve when the requested update has been
// completed.
function update (component, replaceNode=true) {
  if (syncUpdatesInProgressCounter > 0) {
    updateSync(component, replaceNode)
    return Promise.resolve()
  }

  let scheduler = getScheduler()

  if (!componentsWithPendingUpdates.has(component)) {
    componentsWithPendingUpdates.add(component)
    scheduler.updateDocument(function () {
      componentsWithPendingUpdates.delete(component)
      updateSync(component, replaceNode)
    })
  }

  return scheduler.getNextUpdatePromise()
}

// Synchronsly updates the DOM element associated with a component object. .
// This method assumes the presence of `.element` and `.virtualNode`
// properties on the component, which are assigned in the `initialize`
// function.
//
// It calls `render` on the component to obtain the desired state of the DOM,
// then `diff`s it with the previous state and `patch`es the element based on
// the resulting diff. During the patch operation, it pushes the component's
// `refs` object to a shared stack so that references to DOM elements can be
// updated.
//
// If `update` is called during the invocation of `updateSync`,
// the requests are processed synchronously as well. We track whether this is
// the case by incrementing and decrementing `syncUpdatesInProgressCounter`
// around the call.
//
// For now, etch does not allow the root tag of the `render` method to change
// between invocations, because we want to preserve a one-to-one relationship
// between component objects and DOM elements for simplicity.
function updateSync (component, replaceNode=true) {
  if (!isValidVirtualNode(component.virtualNode)) {
    throw new Error(`${component.constructor ? component.constructor.name + ' instance' : component} is not associated with a valid virtualNode. Perhaps this component was never initialized?`)
  }

  if (component.element == null) {
    throw new Error(`${component.constructor ? component.constructor.name + ' instance' : component} is not associated with a DOM element. Perhaps this component was never initialized?`)
  }

  let newVirtualNode = component.render()
  if (!isValidVirtualNode(newVirtualNode)) {
    const namePart = component.constructor && component.constructor.name ? ' in ' + component.constructor.name : ''
    throw new Error('invalid falsy value ' + newVirtualNode + ' returned from render()' + namePart)
  }

  syncUpdatesInProgressCounter++
  let oldVirtualNode = component.virtualNode
  let oldDomNode = component.element
  let newDomNode = patch(oldVirtualNode, newVirtualNode, {
    refs: component.refs,
    listenerContext: component
  })
  component.virtualNode = newVirtualNode
  if (newDomNode !== oldDomNode && !replaceNode) {
    throw new Error('The root node type changed on update, but the update was performed with the replaceNode option set to false')
  } else {
    component.element = newDomNode
  }

  // We can safely perform additional writes after a DOM update synchronously,
  // but any reads need to be deferred until all writes are completed to avoid
  // DOM thrashing. Requested reads occur at the end of the the current frame
  // if this method was invoked via the scheduler. Otherwise, if `updateSync`
  // was invoked outside of the scheduler, the default scheduler will defer
  // reads until the next animation frame.
  if (typeof component.writeAfterUpdate === 'function') {
    component.writeAfterUpdate()
  }
  if (typeof component.readAfterUpdate === 'function') {
    getScheduler().readDocument(function () {
      component.readAfterUpdate()
    })
  }

  syncUpdatesInProgressCounter--
}

// Removes the component's associated element and calls `destroy` on any child
// components. Normally, this function is asynchronous and will perform the
// destruction on the next animation frame. If called as the result of another
// update or destruction, it calls `destroy` on child components synchronously.
// If called as the result of destroying a component higher in the DOM, the
// element is not removed to avoid redundant DOM manipulation. Returns a promise
// that resolves when the destruction is completed.
function destroy (component, removeNode=true) {
  if (syncUpdatesInProgressCounter > 0 || syncDestructionsInProgressCounter > 0) {
    destroySync(component, removeNode)
    return Promise.resolve()
  }

  let scheduler = getScheduler()
  scheduler.updateDocument(function () {
    destroySync(component, removeNode)
  })
  return scheduler.getNextUpdatePromise()
}

// A synchronous version of `destroy`.
//
// Note that we track whether `destroy` calls are in progress and only remove
// the element if we are not a nested call.
function destroySync (component, removeNode=true) {
  syncDestructionsInProgressCounter++
  destroyChildComponents(component.virtualNode)
  if (syncDestructionsInProgressCounter === 1 && removeNode) component.element.remove()
  syncDestructionsInProgressCounter--
}

function destroyChildComponents(virtualNode) {
  if (virtualNode.component && typeof virtualNode.component.destroy === 'function') {
    virtualNode.component.destroy()
  } else if (virtualNode.children) {
    virtualNode.children.forEach(destroyChildComponents)
  }
}

module.exports = {
  initialize,
  update, updateSync,
  destroy, destroySync
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const render = __webpack_require__(11)
const updateProps = __webpack_require__(12)

function patch (oldVirtualNode, newVirtualNode, options) {
  const oldNode = oldVirtualNode.domNode

  if (newVirtualNode === oldVirtualNode) return oldNode

  if (virtualNodesAreEqual(oldVirtualNode, newVirtualNode)) {
    let newNode
    if (newVirtualNode.text != null) {
      oldNode.nodeValue = newVirtualNode.text
      newNode = oldNode
    } else {
      if (typeof newVirtualNode.tag === 'function') {
        newNode = updateComponent(oldVirtualNode, newVirtualNode, options)
      } else {
        updateChildren(oldNode, oldVirtualNode.children, newVirtualNode.children, options)
        updateProps(oldNode, oldVirtualNode, newVirtualNode, options)
        newNode = oldNode
      }
    }
    newVirtualNode.domNode = newNode
    if (newNode !== oldNode && oldNode.parentNode) {
      oldNode.parentNode.replaceChild(newNode, oldNode)
    }
    return newNode
  } else {
    const parentNode = oldNode.parentNode
    const nextSibling = oldNode.nextSibling
    removeVirtualNode(oldVirtualNode, options && options.refs)
    const newNode = render(newVirtualNode, options)
    if (parentNode) parentNode.insertBefore(newNode, nextSibling)
    newVirtualNode.domNode = newNode
    return newNode
  }
}

function updateComponent (oldVirtualNode, newVirtualNode, options) {
  const {component, props: oldProps} = oldVirtualNode
  let {props: newProps, children: newChildren} = newVirtualNode
  newVirtualNode.component = component
  if (options && options.refs) {
    const refs = options.refs
    const oldRefName = oldProps && oldProps.ref
    const newRefName = newProps && newProps.ref
    if (newRefName !== oldRefName) {
      if (oldRefName && refs[oldRefName] === component) delete refs[oldRefName]
      if (newRefName) refs[newRefName] = component
    }
  }
  component.update(newProps || {}, newChildren)
  return component.element
}

let mapPool = [new Map(), new Map(), new Map(), new Map()]

function updateChildren (parentElement, oldChildren, newChildren, options) {
  var oldStartIndex = 0
  var oldEndIndex = oldChildren.length - 1
  var oldStartChild = oldChildren[0]
  var oldEndChild = oldChildren[oldEndIndex]

  var newStartIndex = 0
  var newEndIndex = newChildren.length - 1
  var newStartChild = newChildren[0]
  var newEndChild = newChildren[newEndIndex]

  var oldIndicesByKey

  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
    if (!oldStartChild) {
      oldStartChild = oldChildren[++oldStartIndex]
    } else if (!oldEndChild) {
      oldEndChild = oldChildren[--oldEndIndex]
    } else if (virtualNodesAreEqual(oldStartChild, newStartChild)) {
      patch(oldStartChild, newStartChild, options)
      oldStartChild = oldChildren[++oldStartIndex]
      newStartChild = newChildren[++newStartIndex]
    } else if (virtualNodesAreEqual(oldEndChild, newEndChild)) {
      patch(oldEndChild, newEndChild, options)
      oldEndChild = oldChildren[--oldEndIndex]
      newEndChild = newChildren[--newEndIndex]
    } else if (virtualNodesAreEqual(oldStartChild, newEndChild)) {
      patch(oldStartChild, newEndChild, options)
      parentElement.insertBefore(oldStartChild.domNode, oldEndChild.domNode.nextSibling)
      oldStartChild = oldChildren[++oldStartIndex]
      newEndChild = newChildren[--newEndIndex]
    } else if (virtualNodesAreEqual(oldEndChild, newStartChild)) {
      patch(oldEndChild, newStartChild, options)
      parentElement.insertBefore(oldEndChild.domNode, oldStartChild.domNode);
      oldEndChild = oldChildren[--oldEndIndex]
      newStartChild = newChildren[++newStartIndex]
    } else {
      if (!oldIndicesByKey) {
        if (mapPool.length > 0) {
          oldIndicesByKey = mapPool.pop()
          oldIndicesByKey.clear()
        } else {
          oldIndicesByKey = new Map()
        }
        mapOldKeysToIndices(oldIndicesByKey, oldChildren, oldStartIndex, oldEndIndex)
      }

      var key = getKey(newStartChild)
      var oldIndex = key ? oldIndicesByKey.get(key) : null
      if (oldIndex == null) {
        parentElement.insertBefore(render(newStartChild, options), oldStartChild.domNode)
        newStartChild = newChildren[++newStartIndex]
      } else {
        var oldChildToMove = oldChildren[oldIndex]
        patch(oldChildToMove, newStartChild, options)
        oldChildren[oldIndex] = undefined
        parentElement.insertBefore(oldChildToMove.domNode, oldStartChild.domNode)
        newStartChild = newChildren[++newStartIndex]
      }
    }
  }

  if (oldStartIndex > oldEndIndex) {
    var subsequentElement = newChildren[newEndIndex + 1] ? newChildren[newEndIndex + 1].domNode : null
    for (let i = newStartIndex; i <= newEndIndex; i++) {
      parentElement.insertBefore(render(newChildren[i], options), subsequentElement)
    }
  } else if (newStartIndex > newEndIndex) {
    for (let i = oldStartIndex; i <= oldEndIndex; i++) {
      var child = oldChildren[i]
      if (child) removeVirtualNode(child, options && options.refs)
    }
  }

  if (oldIndicesByKey) mapPool.push(oldIndicesByKey)
}

function removeVirtualNode (virtualNode, refs, removeDOMNode = true) {
  const {domNode, props, children, component} = virtualNode
  const ref = props && props.ref
  if (component) {
    if (refs && ref && refs[ref] === component) delete refs[ref]
    if (component.destroy) component.destroy()
  } else {
    if (refs && ref && refs[ref] === domNode) delete refs[ref]
    if (children) {
      for (let i = 0; i < children.length; i++) {
        removeVirtualNode(children[i], refs, false)
      }
    }
  }

  if (removeDOMNode) domNode.remove()
}

function virtualNodesAreEqual (oldVirtualNode, newVirtualNode) {
  return (
    getKey(oldVirtualNode) === getKey(newVirtualNode)
      && oldVirtualNode.tag === newVirtualNode.tag
  )
}

function getKey (virtualNode) {
  return virtualNode.props ? virtualNode.props.key : undefined
}

function mapOldKeysToIndices (oldIndicesByKey, children, startIndex, endIndex) {
  for (let i = startIndex; i <= endIndex; i++) {
    const key = getKey(children[i])
    if (key) oldIndicesByKey.set(key, i)
  }
  return oldIndicesByKey
}

module.exports = patch


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// This file implements getter and setter functions for a scheduler to be used
// by this library when updating the DOM. The scheduler's job is to ensure that
// DOM interaction is performed efficiently. When using `etch` in Atom, you
// should tell `etch` to use Atom's scheduler by calling
// `setScheduler(atom.views)`.
//
// Schedulers should support the following interface:
// * `updateDocument(fn)` This method is asynchronous. It enqueues functions to
// be executed later.
// * `getNextUpdatePromise()` This function should return a promise that
// resolves after all pending document update functions have been invoked.
//
// Schedulers could support the following optional methods, which are supported
// by Atom's scheduler.
//
// * `readDocument` This method can be invoked by clients other than `etch` when
// it is necessary to read from the DOM. Functions enqueued via this method
// should not be run until all document update functions have been executed.
// Batching updates and reads in this way will prevent forced synchronous
// reflows.
// * `pollDocument` This method is similar to `readDocument`, but it runs the
// associated functions repeatedly. Again, they should be scheduled in such a
// way so as to avoid synchronous reflows.

const DefaultScheduler = __webpack_require__(17)

let scheduler = null

module.exports.setScheduler = function setScheduler (customScheduler) {
  scheduler = customScheduler
}

module.exports.getScheduler = function getScheduler () {
  if (!scheduler) {
    scheduler = new DefaultScheduler()
  }
  return scheduler
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// If the scheduler is not customized via `etch.setScheduler`, an instance of
// this class will be used to schedule updates to the document. The
// `updateDocument` method accepts functions to be run at some point in the
// future, then runs them on the next animation frame.
module.exports = class DefaultScheduler {
  constructor () {
    this.updateRequests = []
    this.readRequests = []
    this.pendingAnimationFrame = null
    this.performUpdates = this.performUpdates.bind(this)
    this.performingUpdates = false
  }

  // Enqueues functions that write to the DOM to be performed on the next
  // animation frame. Functions passed to this method should *never* read from
  // the DOM, because that could cause synchronous reflows.
  updateDocument (fn) {
    this.updateRequests.push(fn)
    if (!this.pendingAnimationFrame) {
      this.pendingAnimationFrame = window.requestAnimationFrame(this.performUpdates)
    }
  }

  readDocument (fn) {
    this.readRequests.push(fn)
    if (!this.pendingAnimationFrame) {
      this.pendingAnimationFrame = window.requestAnimationFrame(this.performUpdates)
    }
  }

  // Returns a promise that will resolve at the end of the next update cycle,
  // after all the functions passed to `updateDocument` and `updateDocumentSync`
  // have been run.
  getNextUpdatePromise () {
    if (!this.nextUpdatePromise) {
      this.nextUpdatePromise = new Promise(resolve => {
        this.resolveNextUpdatePromise = resolve
      })
    }
    return this.nextUpdatePromise
  }

  // Performs all the pending document updates. If running these update
  // functions causes *more* updates to be enqueued, they are run synchronously
  // in this update cycle without waiting for another frame.
  performUpdates () {
    while (this.updateRequests.length > 0) {
      this.updateRequests.shift()()
    }

    // We don't clear the pending frame until all update requests are processed.
    // This ensures updates requested within other updates are processed in the
    // current frame.
    this.pendingAnimationFrame = null

    // Now that updates are processed, we can perform all pending document reads
    // without the risk of interleaving them with writes and causing layout
    // thrashing.
    while (this.readRequests.length > 0) {
      this.readRequests.shift()()
    }

    if (this.nextUpdatePromise) {
      let resolveNextUpdatePromise = this.resolveNextUpdatePromise
      this.nextUpdatePromise = null
      this.resolveNextUpdatePromise = null
      resolveNextUpdatePromise()
    }
  }
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

(function() {
  var PathSeparator, SpaceRegex, filter, matcher, scorer;

  scorer = __webpack_require__(19);

  filter = __webpack_require__(20);

  matcher = __webpack_require__(21);

  PathSeparator = __webpack_require__(4).sep;

  SpaceRegex = /\ /g;

  module.exports = {
    filter: function(candidates, query, options) {
      var queryHasSlashes;
      if (query) {
        queryHasSlashes = query.indexOf(PathSeparator) !== -1;
        query = query.replace(SpaceRegex, '');
      }
      return filter(candidates, query, queryHasSlashes, options);
    },
    score: function(string, query) {
      var queryHasSlashes, score;
      if (!string) {
        return 0;
      }
      if (!query) {
        return 0;
      }
      if (string === query) {
        return 2;
      }
      queryHasSlashes = query.indexOf(PathSeparator) !== -1;
      query = query.replace(SpaceRegex, '');
      score = scorer.score(string, query);
      if (!queryHasSlashes) {
        score = scorer.basenameScore(string, query, score);
      }
      return score;
    },
    match: function(string, query) {
      var baseMatches, index, matches, queryHasSlashes, seen, _i, _ref, _results;
      if (!string) {
        return [];
      }
      if (!query) {
        return [];
      }
      if (string === query) {
        return (function() {
          _results = [];
          for (var _i = 0, _ref = string.length; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this);
      }
      queryHasSlashes = query.indexOf(PathSeparator) !== -1;
      query = query.replace(SpaceRegex, '');
      matches = matcher.match(string, query);
      if (!queryHasSlashes) {
        baseMatches = matcher.basenameMatch(string, query);
        matches = matches.concat(baseMatches).sort(function(a, b) {
          return a - b;
        });
        seen = null;
        index = 0;
        while (index < matches.length) {
          if (index && seen === matches[index]) {
            matches.splice(index, 1);
          } else {
            seen = matches[index];
            index++;
          }
        }
      }
      return matches;
    }
  };

}).call(this);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

(function() {
  var PathSeparator, queryIsLastPathSegment;

  PathSeparator = __webpack_require__(4).sep;

  exports.basenameScore = function(string, query, score) {
    var base, depth, index, lastCharacter, segmentCount, slashCount;
    index = string.length - 1;
    while (string[index] === PathSeparator) {
      index--;
    }
    slashCount = 0;
    lastCharacter = index;
    base = null;
    while (index >= 0) {
      if (string[index] === PathSeparator) {
        slashCount++;
        if (base == null) {
          base = string.substring(index + 1, lastCharacter + 1);
        }
      } else if (index === 0) {
        if (lastCharacter < string.length - 1) {
          if (base == null) {
            base = string.substring(0, lastCharacter + 1);
          }
        } else {
          if (base == null) {
            base = string;
          }
        }
      }
      index--;
    }
    if (base === string) {
      score *= 2;
    } else if (base) {
      score += exports.score(base, query);
    }
    segmentCount = slashCount + 1;
    depth = Math.max(1, 10 - segmentCount);
    score *= depth * 0.01;
    return score;
  };

  exports.score = function(string, query) {
    var character, characterScore, indexInQuery, indexInString, lowerCaseIndex, minIndex, queryLength, queryScore, stringLength, totalCharacterScore, upperCaseIndex, _ref;
    if (string === query) {
      return 1;
    }
    if (queryIsLastPathSegment(string, query)) {
      return 1;
    }
    totalCharacterScore = 0;
    queryLength = query.length;
    stringLength = string.length;
    indexInQuery = 0;
    indexInString = 0;
    while (indexInQuery < queryLength) {
      character = query[indexInQuery++];
      lowerCaseIndex = string.indexOf(character.toLowerCase());
      upperCaseIndex = string.indexOf(character.toUpperCase());
      minIndex = Math.min(lowerCaseIndex, upperCaseIndex);
      if (minIndex === -1) {
        minIndex = Math.max(lowerCaseIndex, upperCaseIndex);
      }
      indexInString = minIndex;
      if (indexInString === -1) {
        return 0;
      }
      characterScore = 0.1;
      if (string[indexInString] === character) {
        characterScore += 0.1;
      }
      if (indexInString === 0 || string[indexInString - 1] === PathSeparator) {
        characterScore += 0.8;
      } else if ((_ref = string[indexInString - 1]) === '-' || _ref === '_' || _ref === ' ') {
        characterScore += 0.7;
      }
      string = string.substring(indexInString + 1, stringLength);
      totalCharacterScore += characterScore;
    }
    queryScore = totalCharacterScore / queryLength;
    return ((queryScore * (queryLength / stringLength)) + queryScore) / 2;
  };

  queryIsLastPathSegment = function(string, query) {
    if (string[string.length - query.length - 1] === PathSeparator) {
      return string.lastIndexOf(query) === string.length - query.length;
    }
  };

}).call(this);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

(function() {
  var pluckCandidates, scorer, sortCandidates;

  scorer = __webpack_require__(19);

  pluckCandidates = function(a) {
    return a.candidate;
  };

  sortCandidates = function(a, b) {
    return b.score - a.score;
  };

  module.exports = function(candidates, query, queryHasSlashes, _arg) {
    var candidate, key, maxResults, score, scoredCandidates, string, _i, _len, _ref;
    _ref = _arg != null ? _arg : {}, key = _ref.key, maxResults = _ref.maxResults;
    if (query) {
      scoredCandidates = [];
      for (_i = 0, _len = candidates.length; _i < _len; _i++) {
        candidate = candidates[_i];
        string = key != null ? candidate[key] : candidate;
        if (!string) {
          continue;
        }
        score = scorer.score(string, query, queryHasSlashes);
        if (!queryHasSlashes) {
          score = scorer.basenameScore(string, query, score);
        }
        if (score > 0) {
          scoredCandidates.push({
            candidate: candidate,
            score: score
          });
        }
      }
      scoredCandidates.sort(sortCandidates);
      candidates = scoredCandidates.map(pluckCandidates);
    }
    if (maxResults != null) {
      candidates = candidates.slice(0, maxResults);
    }
    return candidates;
  };

}).call(this);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

(function() {
  var PathSeparator;

  PathSeparator = __webpack_require__(4).sep;

  exports.basenameMatch = function(string, query) {
    var base, index, lastCharacter, slashCount;
    index = string.length - 1;
    while (string[index] === PathSeparator) {
      index--;
    }
    slashCount = 0;
    lastCharacter = index;
    base = null;
    while (index >= 0) {
      if (string[index] === PathSeparator) {
        slashCount++;
        if (base == null) {
          base = string.substring(index + 1, lastCharacter + 1);
        }
      } else if (index === 0) {
        if (lastCharacter < string.length - 1) {
          if (base == null) {
            base = string.substring(0, lastCharacter + 1);
          }
        } else {
          if (base == null) {
            base = string;
          }
        }
      }
      index--;
    }
    return exports.match(base, query, string.length - base.length);
  };

  exports.match = function(string, query, stringOffset) {
    var character, indexInQuery, indexInString, lowerCaseIndex, matches, minIndex, queryLength, stringLength, upperCaseIndex, _i, _ref, _results;
    if (stringOffset == null) {
      stringOffset = 0;
    }
    if (string === query) {
      return (function() {
        _results = [];
        for (var _i = stringOffset, _ref = stringOffset + string.length; stringOffset <= _ref ? _i < _ref : _i > _ref; stringOffset <= _ref ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this);
    }
    queryLength = query.length;
    stringLength = string.length;
    indexInQuery = 0;
    indexInString = 0;
    matches = [];
    while (indexInQuery < queryLength) {
      character = query[indexInQuery++];
      lowerCaseIndex = string.indexOf(character.toLowerCase());
      upperCaseIndex = string.indexOf(character.toUpperCase());
      minIndex = Math.min(lowerCaseIndex, upperCaseIndex);
      if (minIndex === -1) {
        minIndex = Math.max(lowerCaseIndex, upperCaseIndex);
      }
      indexInString = minIndex;
      if (indexInString === -1) {
        return [];
      }
      matches.push(stringOffset + indexInString);
      stringOffset += indexInString + 1;
      string = string.substring(indexInString + 1, stringLength);
    }
    return matches;
  };

}).call(this);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
        }
    }
};
exports.config = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sTUFBTSxHQUFHO0lBQ2IsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QixXQUFXLEVBQUUsd0ZBQXdGO1FBQ3JHLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLElBQUk7UUFDYixLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsS0FBSyxFQUFFLGNBQWM7UUFDckIsV0FBVyxFQUFFLDBEQUEwRDtRQUN2RSxJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxJQUFJO1FBQ2IsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNELFlBQVksRUFBRTtRQUNaLEtBQUssRUFBRSxlQUFlO1FBQ3RCLFdBQVcsRUFBRSw0REFBNEQ7UUFDekUsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsSUFBSTtRQUNiLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixLQUFLLEVBQUUscUJBQXFCO1FBQzVCLFdBQVcsRUFBRSw0Q0FBNEM7UUFDekQsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsSUFBSTtRQUNiLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRCxhQUFhLEVBQUU7UUFDYixLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLFdBQVcsRUFBRSxxQ0FBcUM7UUFDbEQsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsSUFBSTtRQUNiLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxLQUFLLEVBQUUsWUFBWTtRQUNuQixXQUFXLEVBQUUsaURBQWlEO1FBQzlELElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxDQUFDO1FBQ1IsVUFBVSxFQUFFO1lBQ1YsaUJBQWlCLEVBQUU7Z0JBQ2pCLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLFdBQVcsRUFBRSxxRUFBcUU7Z0JBQ2xGLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJO2dCQUNiLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLFdBQVcsRUFBRSxnRUFBZ0U7Z0JBQzdFLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJO2dCQUNiLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLFdBQVcsRUFBRSw0REFBNEQ7Z0JBQ3pFLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJO2dCQUNiLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLFdBQVcsRUFBRSxnRUFBZ0U7Z0JBQzdFLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJO2dCQUNiLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsV0FBVyxFQUFFLHlDQUF5QztnQkFDdEQsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsS0FBSyxFQUFFLENBQUM7YUFDVDtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsYUFBYTtnQkFDcEIsV0FBVyxFQUFFLHlEQUF5RDtnQkFDdEUsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsS0FBSyxFQUFFLENBQUM7YUFDVDtZQUNELFNBQVMsRUFBRTtnQkFDVCxLQUFLLEVBQUUsWUFBWTtnQkFDbkIsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsS0FBSyxFQUFFLENBQUM7YUFDVDtTQVdGO0tBQ0Y7Q0FDRixDQUFDO0FBR0Esd0JBQU0ifQ==

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map