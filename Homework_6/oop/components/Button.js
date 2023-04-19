class Button extends Component {
    constructor() {
        super();
        this.element = document.createElement('button');
    }

    render(props) {
        return super.render({
            onClick: props.onClick,
            children: [props.text],
            style: this.state.style,
            className: props.isTransparent ? ['button', 'button--isTransparent'] : ['button']
        });
    }
}