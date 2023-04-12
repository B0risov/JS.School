import TaskItem from "./TaskItem.js";
const TaskList = ({title, items, deleteItem, checkItem}) => {

    const list = document.createElement('div')
    list.classList.add('task-list')

    const list_title = document.createElement('h2')
    list_title.classList.add('task-list__title')
    list_title.innerText = title

    const list_items = items.map((item) => {
        const li = document.createElement('li')
        li.append(TaskItem(item, deleteItem, checkItem))
        return li
    });

    const ul_wrapper = document.createElement('div')
    ul_wrapper.classList.add('task-list__items')
    const ul = document.createElement("ul");

    ul.append(...list_items);
    ul_wrapper.append(ul)
    list.append(list_title, ul_wrapper)

    return list;
}

export default TaskList