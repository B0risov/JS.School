const Modal = ({closeModal, children}) => {

    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    overlay.onclick = (event) => {
        closeModal()
    }

    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.onclick = (event) => {
        event.stopPropagation()
    }

    modal.append(children)
    overlay.append(modal)

    return overlay
}

export default Modal