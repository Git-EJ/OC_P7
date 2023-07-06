import { recipes } from '../../data/recipes.js'

export function getAllIngredient () {
  const arrayOfAllIngredient = []
  recipes.forEach(re => {
    re.ingredients.forEach(ins => {
      arrayOfAllIngredient.push(ins.ingredient)
    })
  })
  return arrayOfAllIngredient
}
console.log(getAllIngredient())

export function getAllKitchenAppliance () {
  const arrayOfAllKitchenAppliance = []
  recipes.forEach(re => {
    arrayOfAllKitchenAppliance.push(re.appliance)
  })
  return arrayOfAllKitchenAppliance
}
console.log(getAllKitchenAppliance())

export function getAllUstensils () {
  const arrayOfAllUstensils = []
  recipes.forEach(re => {
    re.ustensils.forEach(ust => {
      arrayOfAllUstensils.push(ust)
    })
  })
  return arrayOfAllUstensils
}
console.log(getAllUstensils())


export function getAllSingleIngredient () {
  const arrayOfAllFilterIngredient = []
  const allFilterIngredient = new Set(getAllIngredient())
  allFilterIngredient.forEach(ing => {
    arrayOfAllFilterIngredient.push(ing)
  })
  return arrayOfAllFilterIngredient
}
console.log(getAllSingleIngredient())
