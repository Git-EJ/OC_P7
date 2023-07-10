import { Header } from './utils/header.js'
import { Select } from './components/select.js'
import { RecipesCounter } from './components/recipesCounter.js'
import { Tags } from './components/tags.js'

export const header = new Header()

export const select = new Select()

export const recipesCounter = new RecipesCounter()

export const tags = new Tags()

// header.searchBar.onInput = (e) => {
//   // filters recipes
//   console.log(e.target.value)
// }
