import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $listTitle = document.createElement('h2')
    $listTitle.className = 'donates-container__title'
    $listTitle.textContent = 'Список донатов'
    this.$rootElement.appendChild($listTitle)

    const $listContainer = document.createElement('div')
    $listContainer.className = 'donates-container__donates'
    this.$rootElement.appendChild($listContainer)

    this.$listContainer = $listContainer
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement)
  }

  render() {
    this.$listContainer.innerHTML = ''
    this.props.donates.forEach(item => {
      this.$listContainer.appendChild(item.$rootElement)
    });
  }

  updateDonates(donates) {
    this.props.donates = donates
    this.render()
  }
}