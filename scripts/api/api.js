import { recipes } from '../../data/recipes.js'

export function getAllIngredient () {
  const arrayOfAllIngredient = []
  recipes.forEach(re => {
    re.ingredients.forEach(ins => {
      const Ins = ins.ingredient.charAt(0).toUpperCase() + ins.ingredient.slice(1)
      if (!arrayOfAllIngredient.includes(Ins)) {
        arrayOfAllIngredient.push(Ins)
        arrayOfAllIngredient.sort()
      }
    })
  })
  return arrayOfAllIngredient
}
// console.log(getAllIngredient())

export function getAllKitchenAppliance () {
  const arrayOfAllKitchenAppliance = []
  recipes.forEach(re => {
    if (!arrayOfAllKitchenAppliance.includes(re.appliance)) {
      re.appliance.charAt(0).toUpperCase()
      re.appliance.slice(1)
      arrayOfAllKitchenAppliance.push(re.appliance)
      arrayOfAllKitchenAppliance.sort()
    }
  })
  return arrayOfAllKitchenAppliance
}
// console.log(getAllKitchenAppliance())

export function getAllCookingTools () {
  const arrayOfAllCookingTools = []
  recipes.forEach(re => {
    re.ustensils.forEach(ust => {
      const Ust = ust.charAt(0).toUpperCase() + ust.slice(1)
      if (!arrayOfAllCookingTools.includes(Ust)) {
        arrayOfAllCookingTools.push(Ust)
        arrayOfAllCookingTools.sort()
      }
    })
  })
  return arrayOfAllCookingTools
}
// console.log(getAllCookingTools())


// export function getAllSingleIngredient () {
//   const arrayOfAllFilterIngredient = []
//   const allFilterIngredient = new Set(getAllIngredient())
//   allFilterIngredient.forEach(ing => {
//     arrayOfAllFilterIngredient.push(ing)
//   })
//   return arrayOfAllFilterIngredient
// }
// console.log(getAllSingleIngredient())
