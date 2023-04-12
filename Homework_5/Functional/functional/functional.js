import App from "./components/App.js";

const load_items = () => {
    return JSON.parse(localStorage.getItem('items'))
}

const save_items = () => {
    localStorage.setItem('items', JSON.stringify(state.items))
}

const task_items = load_items() || [
    {id: 0, isChecked: true, title: 'title 1', tag: 'tag', date: new Date()},
    {id: 1, isChecked: false, title: 'title 2', tag: 'home', date: new Date(2023, 11, 13)},
    {id: 2, isChecked: false, title: 'title 3', tag: 'health', date: new Date(2023, 1, 24)},
    {id: 3, isChecked: true, title: 'title 4', tag: 'other', date: new Date(2023, 4, 5)},
    {id: 4, isChecked: false, title: 'title 5', tag: 'other', date: new Date(2023, 10, 7)},
    {id: 5, isChecked: true, title: 'title 6', tag: 'work', date: new Date(2023, 3, 16)},
]

let state = {
    items: task_items,
    last_id: task_items.reduce((max, item) => max > item.id ? max : item.id, task_items[0].id),
    isModal: false
}

export const useState = (initialValue = undefined) => {
    state = state || initialValue;

    function setValue(newValue) {
        state = newValue;
        save_items();
        renderApp();
    }

    return [state, setValue];
}

function renderApp() {
    const appContainer = document.getElementById("root");
    appContainer.innerHTML = '';
    appContainer.append(App());
}

renderApp();
