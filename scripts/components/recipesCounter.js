import { cardsWrapper, recipesCounterContainer } from '../utils/var.js'

export class RecipesCounter {
  constructor () {
    this.extractElements()
    this.buildElements()
  }

  extractElements () {
    this.recipesCounterContainer = recipesCounterContainer
  }

  buildElements () {
    this.recipesCounterNumberContent = document.createElement('span')
    this.recipesCounterNumberContent.classList.add('recipes-counter_number')
    this.cardCounter()

    this.recipesCounterTextContent = document.createElement('span')
    this.recipesCounterTextContent.classList.add('recipes-counter_text')
    this.recipesCounterTextContent.textContent = 'recettes'

    this.recipesCounterContainer.appendChild(this.recipesCounterNumberContent)
    this.recipesCounterContainer.appendChild(this.recipesCounterTextContent)
  }

  cardCounter () {
    this.cardContainer = cardsWrapper.querySelectorAll('.card_container:not(.hidden')
    this.recipesCounterNumberContent.textContent = this.cardContainer.length
  }
}
