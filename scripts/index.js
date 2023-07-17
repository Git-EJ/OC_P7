import { Header } from './utils/header.js'
import { Select } from './components/select.js'
import { RecipesCounter } from './components/recipesCounter.js'
import { Tags } from './components/tags.js'
import { Cards } from './utils/cards.js'

export const header = new Header()

export const select = new Select()

export const tags = new Tags()

export const cards = new Cards()

export const recipesCounter = new RecipesCounter()

// header.searchBar.onInput = (e) => {
//   console.log(e.target.value)
// }
