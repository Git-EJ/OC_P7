import { Header } from './utils/header.js'
import { Select } from './components/select.js'
import { RecipesCounter } from './components/recipesCounter.js'
import { Tags } from './components/tags.js'
import { Cards } from './utils/cards.js'
import { cardContainerMutation } from './components/card.js'
import { searchFilter } from './utils/filterBySearch.js'
import { tagsFilter } from './utils/filterByTags.js'

export const header = new Header()

export const select = new Select()

export const tags = new Tags()

export const cards = new Cards()

export const recipesCounter = new RecipesCounter()

const filterFunction = () => {
  const text = header.searchBar.value.trim()

  const filtered = searchFilter(text)
  const result = tagsFilter(filtered)

  cards.cards.forEach(card => card.hide())
  result.forEach(card => card.show())

  recipesCounter.cardCounter()
  cardContainerMutation()
  // TODO reset li
  // TODO message de suggestion quand pas de recette
}

header.searchBar.onInput = filterFunction

tags.selectedTags = filterFunction
