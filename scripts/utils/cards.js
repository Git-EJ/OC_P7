import { recipes } from '../../data/recipes.js'
import { Card } from '../components/card.js'

export class Cards {
  constructor () {
    this.extractElements()
    this.buildElements()
  }

  extractElements () {
    this.cardsWrapper = document.querySelector('.cards_wrapper')
  }

  buildElements () {
    this.displayCard()
  }

  displayCard () {
    this.cards = recipes.map(recipe => new Card(recipe, this.cardsWrapper))
    this.cards.forEach(card => this.cardsWrapper.appendChild(card.element))
  }
}
