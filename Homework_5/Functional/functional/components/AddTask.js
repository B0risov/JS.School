import Input from "./Input.js";
import Button from "./Button.js";
import TaskTag from "./TaskTag.js";
import CustomCheckInput from "./CustomCheckInput.js";

const AddTask = ({closeModal, addTask}) => {

    const add_task = document.createElement('div')
    add_task.classList.add('add-task')

    const add_task_title = document.createElement('h3')
    add_task_title.classList.add('add-task__title')
    add_task_title.innerText = 'Add New Task'

    const add_task_input = Input({placeholder: 'Task Title'})
    add_task_input.classList.add('add-task__input')
    add_task_input.id = 'add-task-input'
    add_task_input.onkeyup = (event) => {
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

    const home_label = CustomCheckInput({
        name: 'tag',
        value: 'home',
        children: TaskTag({name: 'home'}),
        outline: '#639462'
    })

    const health_label = CustomCheckInput({
        name: 'tag',
        value: 'health',
        children: TaskTag({name: 'health'}),
        outline: '#0053CF'
    })

    const work_label = CustomCheckInput({
        name: 'tag',
        value: 'work',
        children: TaskTag({name: 'work'}),
        outline: '#9747FF'
    })

    const other_label = CustomCheckInput({
        name: 'tag',
        value: 'other',
        children: TaskTag({name: 'other'}),
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

    const add_button = Button({text: 'Add Task', onClick: addTask})
    add_button.classList.add('add-task__add-button')
    add_button.id = 'add-task-button'
    add_button.disabled = true

    const cancel_button = Button({text: 'Cancel', isTransparent: true, onClick: closeModal})
    cancel_button.classList.add('add-task__cancel-button')

    const button_wrapper = document.createElement('div')
    button_wrapper.classList.add('add-task__buttons')

    button_wrapper.append(cancel_button, add_button)

    add_task.append(add_task_title, add_task_input, options, button_wrapper)

    return add_task
}

export default AddTask