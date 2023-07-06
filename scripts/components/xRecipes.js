export class Xrecipes {
  constructor () {
    this.extractElements()
    this.buildElements()
  }

  extractElements () {
    this.xRecipesContainer = document.querySelector('.Xrecipes_container')
  }

  buildElements () {
    this.xRecipesNumberContent = document.createElement('span')
    this.xRecipesNumberContent.classList.add('Xrecipes_Number')
    this.xRecipesNumberContent.textContent = 'XXX'

    this.xRecipesTextContent = document.createElement('span')
    this.xRecipesTextContent.classList.add('Xrecipes_text')
    this.xRecipesTextContent.textContent = 'recettes'

    this.xRecipesContainer.appendChild(this.xRecipesNumberContent)
    this.xRecipesContainer.appendChild(this.xRecipesTextContent)
  }
}
