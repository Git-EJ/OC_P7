import { recipes } from '../../data/recipes.js'
import { Card } from '../components/card.js'
import { cardsWrapper } from './var.js'

export class Cards {
  constructor () {
    this.buildElements()
  }

  buildElements () {
    this.displayCard()
  }

  displayCard () {
    this.cards = recipes.map(recipe => new Card(recipe, cardsWrapper))
    this.cards.forEach(card => cardsWrapper.appendChild(card.element))
  }
}
