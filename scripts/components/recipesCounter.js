export class RecipesCounter {
  constructor () {
    this.extractElements()
    this.buildElements()
  }

  extractElements () {
    this.recipesCounterContainer = document.querySelector('.recipes-counter_wrapper')
  }

  buildElements () {
    this.recipesCounterNumberContent = document.createElement('span')
    this.recipesCounterNumberContent.classList.add('recipes-counter_number')
    this.recipesCounterNumberContent.textContent = 'XXX'

    this.recipesCounterTextContent = document.createElement('span')
    this.recipesCounterTextContent.classList.add('recipes-counter_text')
    this.recipesCounterTextContent.textContent = 'recettes'

    this.recipesCounterContainer.appendChild(this.recipesCounterNumberContent)
    this.recipesCounterContainer.appendChild(this.recipesCounterTextContent)
  }

  updateCount () {
    // [TODO]
    // count recipes
    // update recipes count
    this.recipesCounterNumberContent.textContent = '12'
  }
}
