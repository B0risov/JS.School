class AddTask extends Component {
    constructor() {
        super();
    }

    render(props) {

        const add_task_title = document.createElement('h3')
        add_task_title.classList.add('add-task__title')
        add_task_title.innerText = 'Add New Task'

        const add_task_input = new Input().render({
            placeholder: 'Task Title',
            id: 'add-task-input'
        })
        add_task_input.classList.add('add-task__input')

        add_task_input.value = props.value
        add_task_input.onkeyup = event => {
            if (event.target?.value && event.target?.value !== '') {
                document.getElementById('add-task-button').disabled = false
            } else {
                document.getElementById('add-task-button').disabled = true
            }
        }

        const options = document.createElement('div')
        options.classList.add('add-task__options')

        const tag_form = document.createElement('form')
        tag_form.classList.add('add-task__tag-list')

        const home_label = new CustomCheckInput().render({
            name: 'tag',
            value: 'home',
            children: new TaskTag().render({name: 'home'}),
            outline: '#639462'
        })

        const health_label = new CustomCheckInput().render({
            name: 'tag',
            value: 'health',
            children: new TaskTag().render({name: 'health'}),
            outline: '#0053CF'
        })

        const work_label = new CustomCheckInput().render({
            name: 'tag',
            value: 'work',
            children: new TaskTag().render({name: 'work'}),
            outline: '#9747FF'
        })

        const other_label = new CustomCheckInput().render({
            name: 'tag',
            value: 'other',
            children: new TaskTag().render({name: 'other'}),
            isDefault: true,
            outline: '#EA8C00'
        })

        tag_form.append(health_label, work_label, home_label, other_label)

        const date_input = document.createElement('input')
        date_input.type = 'date'
        date_input.classList.add('add-task__date')
        date_input.id = 'date-input'
        date_input.valueAsDate = new Date();

        options.append(tag_form, date_input)

        const add_button = new Button().render({text: 'Add Task', onClick: props.addTask})
        add_button.classList.add('add-task__add-button')
        add_button.id = 'add-task-button'
        add_button.disabled = true

        const cancel_button = new Button().render({text: 'Cancel', isTransparent: true, onClick: props.closeModal})
        cancel_button.classList.add('add-task__cancel-button')

        const button_wrapper = document.createElement('div')
        button_wrapper.classList.add('add-task__buttons')

        button_wrapper.append(cancel_button, add_button)

        return super.render({
            children: [add_task_title, add_task_input, options, button_wrapper],
            style: this.state.style,
            className: ['add-task']
        });
    }
}