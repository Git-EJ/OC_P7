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
  if (search.length < 3) return cards.cards

  const filteredCards = cards.cards.filter(card => {
    return card.name.toLowerCase().includes(search) ||
           card.description.toLowerCase().includes(search) ||
           card.ingredients.filter(ing => ing.ingredient.toLowerCase().includes(search)).length > 0
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
        card.ingredients.filter(ing => ing.ingredient.toLowerCase().includes(tag)).length > 0
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

  const filtered = searchFilter(text)
  const result = tagsFilter(filtered)

  cards.cards.forEach(card => card.hide())
  result.forEach(card => card.show())
  recipesCounter.cardCounter()
  cssByNumberOfCard()
  filterSelectList(result)
  noFiltermatch(result, text)
}

/**
 *
 * @param {Array} result array of DOM element card
 * function for remove element filter(li) in select btn if not in a recipe selected by tag(s) or li element filter
 */
export const filterSelectList = (result) => {
  const elements = filtersWrapper.querySelectorAll('.filter_content')
  const listIngredient = result.map(res => res.ingredients.map(ings => ings.ingredient.toLowerCase()))
  // console.log('elem', elements)
  // console.log('res', result)
  // console.log('loi', listIngredient)
  const listAppliance = result.map(res => res.appliance.toLowerCase())
  const listUstensils = result.map(res => res.ustensils.map(ust => ust.toLowerCase()))

  elements.forEach(el => {
    const listElement = el.textContent.toLowerCase()
    const ingredientElement = listIngredient.some(ing => ing.includes(listElement))
    const applianceElement = listAppliance.includes(listElement)
    const ustensilsElement = listUstensils.some(ust => ust.includes(listElement))

    el.hidden = !(ingredientElement || applianceElement || ustensilsElement)

    tagsOnDisplay.forEach(tod => {
      if (tod === listElement) el.hidden = true
    })
  })
}

/**
 *
 * @param {Array} result array of DOM element card
 * @param {String} text header search bar user input
 */

export const noFiltermatch = (result, text) => {
  const filterNoMatchClass = cardsWrapper.querySelector('.filter_no-match')
  if (result.length === 0 && !filterNoMatchClass) {
    // console.log('1')
    const noMatch = document.createElement('div')
    noMatch.classList.add('filter_no-match')
    noMatch.textContent = 'Pas de recettes correspondantes à votre recherche'
    cardsWrapper.appendChild(noMatch)

    cardsWrapper.classList.add('cards_wrapper_filter_no-match')
  }
  // noFiltermatchsuggestions(text, cards.cards)
}

export const displayCardsAfterNoFilteMatch = () => {
  const filterNoMatchClassDiv = cardsWrapper.querySelector('.filter_no-match')
  console.log('D', filterNoMatchClassDiv)
  cardsWrapper.classList.remove('cards_wrapper_filter_no-match')
  filterNoMatchClassDiv && filterNoMatchClassDiv.remove()
}

export const noFiltermatchsuggestions = (text, cards) => { // TODO  a recuperer à la place de cards => 3 tableaux de string d'ingredient , appliance, ustensils
}

// TODO message de suggestions => nofiltermatchsuggestions
// TODO centrage message noMatch dans card.js containerCount<= 1
// TODO input search bar suggestions quand user input pdt la saisie
