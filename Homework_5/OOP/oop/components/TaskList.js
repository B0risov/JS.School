class TaskList extends Component {
    constructor() {
        super();
    }

    render(props) {

        const list_title = document.createElement('h2')
        list_title.classList.add('task-list__title')
        list_title.innerText = props.title

        const list_items = props.items.map((item) => {
            const li = document.createElement('li')
            li.append(new TaskItem().render({
                id: item.id,
                isChecked: item.isChecked,
                title: item.title,
                tag: item.tag,
                date: item.date,
                deleteItem: props.deleteItem,
                checkItem: props.checkItem
                }
            ))
            return li
        });

        const ul_wrapper = document.createElement('div')
        ul_wrapper.classList.add('task-list__items')
        const ul = document.createElement("ul");

        ul.append(...list_items);
        ul_wrapper.append(ul)

        return super.render({
            children: [list_title, ul_wrapper],
            className: ['task-list'],
            id: props.id
        });
    }
}
