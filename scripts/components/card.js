import { createElement, createImage } from '../utils/domElement.js'

export class Card {
  constructor (recipe) {
    this.data = recipe
    this.element = this.buildElement()
    this.element.card = this
  }

  get id () {
    return this.data.id
  }

  get name () {
    return this.data.name
  }

  get description () {
    return this.data.description
  }

  get time () {
    return this.data.time
  }

  get imageUrl () {
    return `./assets/dishes/${this.data.image}`
  }

  /**
   * @returns {Array<{ingredient:string, quantity:number, unit:string}>}
   */
  get ingredients () {
    return this.data.ingredients
  }

  get appliance () {
    return this.data.appliance
  }

  /**
   * @returns {Array<string>}
   */
  get ustensils () {
    return this.data.ustensils
  }

  buildElement () {
    this.cardContainer = createElement('div', ['card_container'], `card_container_${this.id}`, null, null)
    this.imgContainer = createElement('div', ['card_img_container'], null, null, this.cardContainer)
    this.contentContainer = createElement('div', ['card_content_container'], null, null, this.cardContainer)
    this.buildImage()
    this.buildTime()
    this.buildTitle(this.name)
    this.buildDescription(this.description)
    this.buildIngredient(this.data.ingredients)

    return this.cardContainer
  }

  buildImage () {
    const img = createImage(`${this.imageUrl}`, `recipe: ${this.name}`, ['card_img'], this.imgContainer)
    img.setAttribute('loading', 'lazy')
  }

  buildTime () {
    createElement('span', ['card_time'], null, `${this.time}min`, this.imgContainer)
  }

  buildTitle (name) {
    createElement('h2', ['card_content_title'], null, name, this.contentContainer)
  }

  buildDescription (description) {
    createElement('span', ['card_content_description_title'], null, 'RECETTE', this.contentContainer)
    const desc = createElement('div', ['card_content_description'], null, description, this.contentContainer)
    desc.setAttribute('title', description) // description complete au survole en infos bulles
  }

  buildIngredient (ingredients) {
    createElement('span', ['card_content_ingredients_title'], null, 'INGRÉDIENTS', this.contentContainer)
    const container = createElement('div', ['card_content_ingredients_container'], null, null, this.contentContainer)

    ingredients.forEach(ing => {
      const ingredient = createElement('div', ['card_content_ingredient_container'], null, null, container)
      createElement('span', ['card_content_ingredient_name'], null, ing.ingredient, ingredient)
      this.displayQuantity(ing, ingredient)
    })
  }

  displayQuantity (qua, parent) {
    const container = createElement('span', ['card_content_ingredient_quantity_container'], null, null, parent)
    createElement('span', ['card_content_ingredient_quantity'], null, !qua.quantity ? '--' : qua.quantity, container)
    this.displayUnit(qua.unit, container)
  }

  displayUnit (unit, parent) {
    if (!unit) return
    const text = (unit.toLowerCase().startsWith('gramme')) ? 'g' : unit.toLowerCase()
    this.contentIngredientUnit = createElement('span', ['card_content_ingredient_unit'], null, text, parent)
  }

  hide () {
    this.cardContainer.classList.add('hidden')
  }

  show () {
    this.cardContainer.classList.remove('hidden')
  }
}

const cardsWrapper = document.querySelector('.cards_wrapper')
const defaultColumnsStyle = cardsWrapper.style.gridTemplateColumns

function cardContainerMutation () {
  const containers = document.querySelectorAll('.card_container:not(.hidden)')
  console.log('containers', containers)
  const containerCount = containers.length
  if (containerCount === 1) {
    console.log('1', containerCount)
    cardsWrapper.style.gridTemplateColumns = 'auto'
  } else if (containerCount === 2) {
    console.log('2', containerCount)
    cardsWrapper.style.gridTemplateColumns = 'auto auto'
  } else {
    cardsWrapper.style.gridTemplateColumns = defaultColumnsStyle
  }
}

export function DOMObserver () {
  const observer = new MutationObserver(cardContainerMutation)

  observer.observe(cardsWrapper, { childList: true })

  cardContainerMutation()
}

DOMObserver()
