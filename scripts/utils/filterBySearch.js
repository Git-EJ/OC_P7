
import { DOMObserver } from '../components/card.js'
import { cards, recipesCounter } from '../index.js'

export const searchFilter = (e) => {
  const search = e.target.value.toLowerCase()
  if (search.length < 3) return

  const filteredCards = cards.cards.filter(card => {
    return card.name.toLowerCase().includes(search) ||
           card.description.toLowerCase().includes(search) ||
           card.ingredients.filter(ing => ing.ingredient.toLowerCase().includes(search)).length > 0
  })

  cards.cards.forEach(card => card.hide())
  filteredCards.forEach(card => card.show())
  recipesCounter.cardCounter()
  DOMObserver()
}
