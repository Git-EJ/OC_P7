import { recipes } from '../../data/recipes.js'
// import { getAllDescription, getAllId, getAllImage, getAllIngredients, getAllName, getAllTime } from '../api/api.js'
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
    /*
    this.allId = getAllId(recipes)
    this.allImage = getAllImage(recipes)
    this.allName = getAllName(recipes)
    this.allDescriptions = getAllDescription(recipes)
    this.allTime = getAllTime(recipes)
    this.allIngredients = getAllIngredients(recipes)
    */
    this.displayCard()
  }

  displayCard () {
    this.cards = recipes.map(recipe => new Card(recipe))
    this.cards.forEach(card => this.cardsWrapper.appendChild(card.element))
  }
}
