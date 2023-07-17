export class RecipesCounter {
  constructor () {
    this.extractElements()
    this.buildElements()
  }

  extractElements () {
    this.recipesCounterContainer = document.querySelector('.recipes-counter_wrapper')
    this.cardContainer = document.querySelectorAll('.card_container')
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
    this.recipesCounterNumberContent.textContent = this.cardContainer.length
  }
}
