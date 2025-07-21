import { Component } from '../core/Component';

export class Form extends Component {
  constructor(props) {
    super();
    this.onSubmit = props.onSubmit
  }
  get isValid() {
    const value = this.state.amount
    return value !== '' && !isNaN(value) && Number(value) >=1 && Number(value) <= 100
  }
  setup(props) {
    this.state = {
      amount: '',
    }
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $donateLabel = document.createElement('label')
    $donateLabel.className = 'donate-form__input-label'
    $donateLabel.textContent = 'Введите сумму в $'
    this.$rootElement.appendChild($donateLabel)

    const $donateLabelInput = document.createElement('input')
    $donateLabelInput.className = 'donate-form__donate-input'
    $donateLabelInput.name = 'amount'
    $donateLabelInput.type = 'number'
    $donateLabelInput.max = '100'
    $donateLabelInput.min = '1'
    $donateLabel.appendChild($donateLabelInput)

    const $donateButton = document.createElement('button')
    $donateButton.className = 'donate-form__submit-button'
    $donateButton.type = 'submit'
    $donateButton.textContent = 'Задонатить'
    this.$rootElement.appendChild($donateButton)

    this.$input = $donateLabelInput
    this.$button = $donateButton

    this.$input.addEventListener('input', this.handleInput.bind(this))
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))
  }

  handleInput(event) {
    const { target } = event
    this.state.amount = target.value
    if (!this.isValid) {
      this.$button.disabled = true
    } else {
      this.$button.disabled = false
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isValid) {
      const amount = Number(this.state.amount)
      this.onSubmit(amount)
      this.$input.value = ''
      this.state.amount = ''
    }
  }
}
