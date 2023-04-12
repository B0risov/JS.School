class Header extends Component {
    constructor() {
        super();
    }

    render(props) {

        const title = document.createElement('h1')
        title.classList.add('header__title')
        title.innerText = props.title

        return super.render({
            children: title,
            style: this.state.style,
            className: ['header']
        });
    }
}