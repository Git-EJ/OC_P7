import { cards, header, recipesCounter } from '../index.js'
import { cssByNumberOfCard } from '../components/card.js'

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

export const tagsFilter = (filtered) => {
  tagsOnDisplay.length = 0
  document.querySelectorAll('.tag_container').forEach(tag => {
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

export const filterFunction = () => {
  const text = header.searchBar.value.trim()

  const filtered = searchFilter(text)
  const result = tagsFilter(filtered)

  cards.cards.forEach(card => card.hide())
  result.forEach(card => card.show())
  recipesCounter.cardCounter()
  cssByNumberOfCard()
  filterSelectList(result)
  console.log(result)
}

/**
 *
 * @param {Array} result array of DOM element card
 * function for remove element in select btn if not in a recipe selected by tag(s)
 */
export const filterSelectList = (result) => {
  const elements = document.querySelectorAll('.filter_content')
  const listIngredient = result.map(res => res.ingredients.map(ings => ings.ingredient.toLowerCase()))
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

// TODO message de suggestion quand pas de recette
