import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    function formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth()).padStart(2, '0')
      const year = date.getFullYear()
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0')

      return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`
    }
    this.state = {
      id: Date.now(),
      date: formatDate(new Date()),
      amount: props.amount,
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.innerHTML = `${this.state.date} - <b>$${this.state.amount}</b>`
    const $deleteButton = document.createElement('button')
    $deleteButton.className = 'delete-button'
    $deleteButton.textContent = 'Удалить'
    this.$rootElement.appendChild($deleteButton)

    this.$deleteButton = $deleteButton

    this.$deleteButton.addEventListener('click', this.handleDelete.bind(this))
  }

  handleDelete() {
    this.props.onDelete(this.state.id)
  }
}
