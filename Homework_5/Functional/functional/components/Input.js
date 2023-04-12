const Input = ({placeholder = "Sample Text"}) => {

    const input = document.createElement('input')
    input.classList.add('text-input');
    input.placeholder = placeholder

    return input
}

export default Input