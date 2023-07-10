export function getAllIngredient (recipes) {
  const set = new Set()
  recipes.forEach(re => {
    re.ingredients.forEach(ins => {
      set.add(ins.ingredient.charAt(0).toUpperCase() + ins.ingredient.slice(1))
    })
  })
  return [...set].sort()
}
// console.log(getAllIngredient())

// [TODO START]
export function getAllKitchenAppliance (recipes) {
  const arrayOfAllKitchenAppliance = []
  recipes.forEach(re => {
    if (!arrayOfAllKitchenAppliance.includes(re.appliance)) {
      re.appliance.charAt(0).toUpperCase()
      re.appliance.slice(1)
      arrayOfAllKitchenAppliance.push(re.appliance)
    }
  })
  arrayOfAllKitchenAppliance.sort()
  return arrayOfAllKitchenAppliance
}
// console.log(getAllKitchenAppliance())

export function getAllCookingTools (recipes) {
  const arrayOfAllCookingTools = []
  recipes.forEach(re => {
    re.ustensils.forEach(ust => {
      const Ust = ust.charAt(0).toUpperCase() + ust.slice(1)
      if (!arrayOfAllCookingTools.includes(Ust)) {
        arrayOfAllCookingTools.push(Ust)
      }
    })
  })
  arrayOfAllCookingTools.sort()
  return arrayOfAllCookingTools
}
// console.log(getAllCookingTools())
// [TODO END]
