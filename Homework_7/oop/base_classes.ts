export interface ComponentProps {
    onClick?: (e: MouseEvent) => void,
    className?: string[],
    id?: string,
    children?: HTMLElement[]
}

export class Component {

    state: Object
    props: ComponentProps
    element: HTMLElement

    constructor() {
        this.state = {};
        this.props = {};
        this.element = document.createElement('div');
        this.ComponentDidCreate()
    }

    setState(state: Object): void {
        this.state = {...this.state, ...state};
        this.ComponentDidUpdate();
    }

    ComponentDidCreate(): void {
    }

    ComponentDidUpdate(): void {
        this.render(this.props);
    }

    render(props: ComponentProps): HTMLElement {
        this.props = {...props};

        const component: HTMLElement = this.element;

        if (props.onClick) {
            component.onclick = props.onClick;
        }

        if (props.className) {
            component.classList.add(...props.className)
        }

        if (props.id) {
            component.id = props.id
        }

        if (props.children && component.children.length > 0) {

            if (props.children.length > component.children.length) {
                for (let i = 0; i < props.children.length; i++) {
                    if (i < component.children.length) {
                        if (!component.children[i].isEqualNode(props.children[i])) {
                            component.children[i].replaceWith(props.children[i])
                        }
                    } else {
                        component.append(props.children[i])
                    }

                }
            }

            else if (props.children.length < component.children.length) {
                for (let i = 0; i < component.children.length; i++) {
                    if (i < props.children.length) {
                        if (!component.children[i].isEqualNode(props.children[i])) {
                            component.children[i].replaceWith(props.children[i])
                        }
                    } else {
                        component.children[i].remove()
                    }

                }
            }

            else {
                for (let i = 0; i < props.children.length; i++) {
                    if (!component.children[i].isEqualNode(props.children[i])) {
                        component.children[i].replaceWith(props.children[i])
                    }
                }
            }
        }

        if (component.innerHTML === '') {
            component.append(...props.children)
        }

        return component;
    }
}
