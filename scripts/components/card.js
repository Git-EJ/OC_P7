/**
 * @param {Array} recipes from data/recipes.js (array of objects)
 * @param {HTMLElement} wrapper for appendchild
 * @param {array} id array of id(number) for give a card container attribute id
 * @param {Array} img from data/recipes.js (array of recipe image name 'string')
 * @param {Array} title from data/recipes.js (array of recipe name 'string')
 * @param {Array} description from data/recipes.js (array of recipe description 'string')
 * @param {Array} ingredients from data/recipes.js (array of recipe ingredients 'object')
 */
export class Card {
  constructor (recipes, wrapper, id, img, name, description, ingredients) {
    this.recipes = recipes
    this.wrapper = wrapper
    this.id = id
    this.image = img
    this.name = name
    this.description = description
    this.ingredients = ingredients
    this.buildElements()
  }

  buildElements () {
    for (let i = 0; i < this.recipes.length; i++) {
      this.cardContainer = document.createElement('div')
      this.cardContainer.classList.add('card_container')
      this.cardContainer.id = `card_container_${this.id[i]}`

      this.contentContainer = document.createElement('div')
      this.contentContainer.classList.add('card_content_container')

      this.contentIngredientsContainer = document.createElement('div')
      this.contentIngredientsContainer.classList.add('card_content_ingredients_container')

      this.displayImage(this.recipes[i].image)
      this.displayTitle(this.name[i])
      this.displayDescription(this.description[i])
      this.displayIngredient(this.recipes[i].ingredients)
      // this.displayQuantity(this.recipes[i].ingredients)

      this.contentContainer.appendChild(this.contentIngredientsContainer)
      this.cardContainer.appendChild(this.contentContainer)
      this.wrapper.appendChild(this.cardContainer)
    }
  }

  displayImage (image) {
    this.imgContainer = document.createElement('div')
    this.imgContainer.classList.add('card_img_container')

    this.img = document.createElement('img')
    this.img.classList.add('card_img')
    this.img.setAttribute('alt', 'XXX')
    this.img.setAttribute('src', `../../assets/dishes/${image}`)

    this.imgContainer.appendChild(this.img)
    this.cardContainer.appendChild(this.imgContainer)
  }

  displayTitle (name) {
    this.title = document.createElement('h2')
    this.title.classList.add('card_content_title')
    this.title.textContent = name

    this.contentContainer.appendChild(this.title)
  }

  displayDescription (description) {
    this.contentDescriptionTitle = document.createElement('span')
    this.contentDescriptionTitle.classList.add('card_content_description_title')
    this.contentDescriptionTitle.textContent = 'RECETTE'

    this.contentDescription = document.createElement('div')
    this.contentDescription.classList.add('card_content_description')
    this.contentDescription.textContent = description
    this.contentDescription.setAttribute('title', description) // description complete au survole en infos bulles

    this.contentContainer.appendChild(this.contentDescriptionTitle)
    this.contentContainer.appendChild(this.contentDescription)
  }

  displayIngredient (ingredients) {
    this.contentIngredientsTitle = document.createElement('span')
    this.contentIngredientsTitle.classList.add('card_content_ingredients_title')
    this.contentIngredientsTitle.textContent = 'INGRÉDIENTS'

    ingredients.forEach(ing => {
      this.contentIngredientContainer = document.createElement('div')
      this.contentIngredientContainer.classList.add('card_content_ingredient_container')

      this.contentIngredientName = document.createElement('span')
      this.contentIngredientName.classList.add('card_content_ingredient_name')
      this.contentIngredientName.textContent = ing.ingredient

      this.contentIngredientContainer.appendChild(this.contentIngredientName)
      this.contentIngredientsContainer.appendChild(this.contentIngredientContainer)

      this.displayQuantity(ing)

      this.contentContainer.appendChild(this.contentIngredientsTitle)
    })
  }

  displayQuantity (qua) {
    this.contentQuantityContainer = document.createElement('span')
    this.contentQuantityContainer.classList.add('card_content_ingredient_quantity_container')

    this.contentIngredientQuantity = document.createElement('span')
    this.contentIngredientQuantity.classList.add('card_content_ingredient_quantity')
    this.contentIngredientQuantity.textContent = !qua.quantity ? '--' : qua.quantity

    this.contentQuantityContainer.appendChild(this.contentIngredientQuantity)
    this.contentIngredientContainer.appendChild(this.contentQuantityContainer)

    this.displayUnit(qua)
  }

  displayUnit (uni) {
    this.contentIngredientUnit = document.createElement('span')
    this.contentIngredientUnit.classList.add('card_content_ingredient_unit')

    const unit = uni.unit
    if (unit) {
      console.log(unit)
      if (unit === 'grammes' || unit === 'gramme' || unit === 'Grammes' || unit === 'gramme') {
        this.contentIngredientUnit.textContent = unit.charAt(0).toLowerCase()
      } else {
        this.contentIngredientUnit.textContent = unit.toLowerCase()
      }

      this.contentQuantityContainer.appendChild(this.contentIngredientUnit)
    }
  }
}
