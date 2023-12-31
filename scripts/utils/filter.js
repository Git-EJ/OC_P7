import { cards, header, recipesCounter } from '../index.js'
import { cssByNumberOfCard } from '../components/card.js'
import { cardsWrapper, filtersWrapper, tagsWrapper } from './var.js'

/**
 *
 * @param {string} searchText user input in header input
 * @returns array of DOMElements card, filtered by user input in header input
 */
export const searchFilter = (searchText) => {
  const search = searchText.toLowerCase()
  if (search.length <= 3) return cards.cards

  const filteredCards = cards.cards.filter(card => {
    return card.name.toLowerCase().includes(search) ||
           card.description.toLowerCase().includes(search) ||
           !!card.ingredients.find(ing => ing.ingredient.toLowerCase().includes(search))
  })

  return filteredCards
}

export const tagsOnDisplay = []

/**
 *
 * @param {Array<DOMElement>} filtered card filtered by searchFilter() header search bar input
 * @returns array of DOMElements card, filtered by tags
 */
export const tagsFilter = (filtered) => {
  tagsOnDisplay.length = 0
  tagsWrapper.querySelectorAll('.tag_container').forEach(tag => {
    tagsOnDisplay.push(tag.textContent.toLowerCase())
  })

  return filtered.filter(card => {
    return tagsOnDisplay.every(tag =>
      card.appliance.toLowerCase().includes(tag) ||
        card.ustensils.some(ust => ust.toLowerCase().includes(tag)) ||
        !!card.ingredients.find(ing => ing.ingredient.toLowerCase().includes(tag))
    )
  })
}
/**
 * {1} call in index.js
 * {2} call searchFilter() / filter by header input search
 * {3} call tagsFilter() / filter by tags
 * {4} call cardCounter() / update recipe counter
 * {4} call cssByNumberofCard() / card wrapper css display change
 * {5} call filterSelectList() / select li update according to the selected li filter(s)
 * {6} call noFilterMatch() / error message when no filter match any recipes
*/
export const filterFunction = () => {
  const text = header.searchBar.value.trim()

  const filtered = text === '' ? cards.cards : searchFilter(text)
  const result = tagsFilter(filtered)

  cards.cards.forEach(card => card.hide())
  result.forEach(card => card.show())
  recipesCounter.cardCounter()
  cssByNumberOfCard()
  filterSelectList(result)
  if (result.length === 0) {
    noFiltermatch(result)
  }
}

/**
 *
 * @param {Array} result array of DOM element card
 * function for remove element filter(li) in select btn if not in a recipe selected by tag(s) or li element filter
 */
export const filterSelectList = (result) => {
  if (result.length > 0) {
    const noMatch = cardsWrapper.querySelector('.filter_no-match')
    noMatch.hidden = true
  }
  const ingredients = filtersWrapper.querySelectorAll('.filter_ingredients')
  const appliance = filtersWrapper.querySelectorAll('.filter_appliance')
  const ustensils = filtersWrapper.querySelectorAll('.filter_ustensils')
  const allElements = [...ingredients, ...appliance, ...ustensils]

  const listIngredients = new Map()
  ingredients.forEach(ing => {
    const key = ing.textContent.toLowerCase()
    listIngredients.set(key, ing)
  })

  const listAppliance = new Map()
  appliance.forEach(app => {
    const key = app.textContent.toLowerCase()
    listAppliance.set(key, app)
  })

  const listUstensils = new Map()
  ustensils.forEach(ust => {
    const key = ust.textContent.toLowerCase()
    listUstensils.set(key, ust)
  })

  allElements.forEach(el => {
    el.hidden = true
  })

  result.forEach(res => {
    res.ingredients.forEach(ing => {
      const ingredient = ing.ingredient.toLowerCase()
      listIngredients.get(ingredient).hidden = false
    })
    res.ustensils.forEach(ust => {
      listUstensils.get(ust.toLowerCase()).hidden = false
    })
    listAppliance.get(res.appliance.toLowerCase()).hidden = false
  })
}

/**
 *
 * @param {Array} result array of DOM element card
 */
export const noFiltermatch = (result) => {
  const noMatch = cardsWrapper.querySelector('.filter_no-match')
  noMatch.hidden = result.length > 0
  cardsWrapper.classList.add('cards_wrapper_filter_no-match')
}
