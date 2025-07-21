import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const $heading = document.createElement('h1')
    $heading.className = 'total-amount'
    const $headingSpan = document.createElement('span')
    $headingSpan.textContent = this.state.total
    this.$total = $headingSpan
    $heading.textContent = 'Итого: $'
    this.$rootElement.appendChild($heading)
    $heading.appendChild($headingSpan)
    
    const donateForm = new Form({
      onSubmit: this.onItemCreate.bind(this), 
    });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List({ donates: this.state.donates });
    this.donateList = donateList
    this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    const item = new ListItem({ 
      amount,
      onDelete: this.onDeleteItem.bind(this)
     })
    this.state.donates.push(item)
    this.donateList.addItem(item)
    this.state.total += amount
    this.$total.textContent = this.state.total
  }

  onDeleteItem(itemId) {
    const deleteDonationAmount = this.state.donates.find(item => item.state.id === itemId)?.state.amount
    if (deleteDonationAmount !== undefined) {
      this.state.donates = this.state.donates.filter(item => item.state.id !== itemId)
      this.state.total -= deleteDonationAmount
      this.$total.textContent = this.state.total
      this.donateList.updateDonates(this.state.donates)
    }
  }
}
