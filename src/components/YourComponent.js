import { Component } from '../core/Component';
import { Button } from './Button';

export class YourComponent extends Component {
  setup(props) {
    this.state = {
      counter: 0,
      // остальные компонента
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'component';

    const $heading = document.createElement('h1');
    this.$heading.textContent = `${props.heading}: ${this.state.counter}`
    // $heading.textContent = props.heading;
    this.$rootElement.appendChild($heading);
    this.$heading = $heading

    const incrementButton = new Button({
        text: 'Увеличить счетчик',
        onClick: this.handleClick.bind(this)
    })

    this.$rootElement.appendChild(incrementButton.$rootElement)
  }

  handleClick(event) {
    this.state.counter++
    this.$heading.textContent = `${this.props.heading}: ${this.state.counter}`
  }
}