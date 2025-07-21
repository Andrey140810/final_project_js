import { Component } from "../core/Component";

export class Button extends Component {
    setup(props) {
        this.$rootElement = document.createElement('button')
        this.$rootElement.textContent = props.test
        this.$rootElement.addEventListener('click', props.onClick)
    }
}