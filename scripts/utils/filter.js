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

  // TODO reset li
  // TODO message de suggestion quand pas de recette

  console.log('result', result)
  result.forEach((res, i) => {
    console.log([i], 'result-Ing', res.ingredients)
    console.log([i], 'result-App', res.appliance)
    console.log([i], 'result-Ust', res.ustensils)
  })
}
// const filterIngredient = document.querySelectorAll('filter_ingredients')
// const filterAppliance = document.querySelectorAll('filter_ingredients')
// const filterUstensils = document.querySelectorAll('filter_ingredients')
