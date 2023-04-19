class Modal extends Component {
    constructor() {
        super();
    }

    render(props) {

        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.onclick = (event) => {
            event.stopPropagation()
        }
        modal.append(props.children)

        return super.render({
            onClick: props.closeModal,
            children: modal,
            style: this.state.style,
            className: ['overlay']
        });
    }
}