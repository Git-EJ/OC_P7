import { cards, recipesCounter } from '../index.js'

export const tagsFilter = (e) => {
  console.log(e.target.textContent)
  const tagsOnDisplay = []
  document.querySelectorAll('.tag_container').forEach(tag => {
    tagsOnDisplay.push(tag.textContent.toLowerCase())
  })
  console.log(tagsOnDisplay)

  const filteredCards = cards.cards.filter(card => {
    return tagsOnDisplay.every(tag =>
      card.name.toLowerCase().includes(tag) ||
      card.description.toLowerCase().includes(tag) ||
      card.appliance.toLowerCase().includes(tag) ||
      card.ustensils.some(ust => ust.toLowerCase().includes(tag)) ||
      card.ingredients.filter(ing => ing.ingredient.toLowerCase().includes(tag)).length > 0
    )
  })

  cards.cards.forEach(card => card.hide())
  filteredCards.forEach(card => card.show())
  recipesCounter.cardCounter()
}
