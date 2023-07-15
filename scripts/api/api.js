// import { recipes } from '../../data/recipes.js'

export function getAllIngredient (recipes) {
  const set = new Set()
  recipes.forEach(re => {
    re.ingredients.forEach(ins => {
      set.add(ins.ingredient.charAt(0).toUpperCase() + ins.ingredient.slice(1).toLowerCase())
    })
  })
  return [...set].sort()
}
// console.log(getAllIngredient(recipes))

export function getAllKitchenAppliance (recipes) {
  const set = new Set()
  recipes.forEach(app => {
    set.add(app.appliance.charAt(0).toUpperCase() + app.appliance.slice(1).toLowerCase())
  })
  return [...set].sort()
}
// console.log(getAllKitchenAppliance(recipes))

export function getAllCookingTools (recipes) {
  const set = new Set()
  recipes.forEach(re => {
    re.ustensils.forEach(us => {
      set.add(us.charAt(0).toUpperCase() + us.slice(1).toLowerCase())
    })
  })
  return [...set].sort()
}
// console.log(getAllCookingTools(recipes))

export function getAllId (recipes) {
  const set = new Set()
  recipes.forEach(re => {
    set.add(re.id)
  })
  return [...set]
}
// console.log(getAllId(recipes))

export function getAllImage (recipes) {
  const set = new Set()
  recipes.forEach(re => {
    set.add(re.image)
  })
  return [...set]
}
// console.log(getAllImage(recipes))

export function getAllName (recipes) {
  const set = new Set()
  recipes.forEach(re => {
    set.add(re.name)
  })
  return [...set]
}
// console.log(getAllName(recipes))

export function getAllDescription (recipes) {
  const set = new Set()
  recipes.forEach(re => {
    set.add(re.description)
  })
  return [...set]
}
// console.log(getAllDescription(recipes))

export function getAllIngredients (recipes) {
  const set = new Set()
  recipes.forEach(re => {
    re.ingredients.forEach(ins => {
      set.add(ins)
    })
  })
  return [...set]
}
// console.log(getAllIngredients(recipes))
