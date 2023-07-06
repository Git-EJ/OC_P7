export class Select {
  constructor () {
    this.extractElements()
    this.buildElements()
  }

  extractElements () {
    this.selectContainer = document.querySelector('.select_container') // [DEV]change for btnContainer if btn vs select
  }

  // buildElements () {
  //   this.selectIngredients = document.createElement('select')
  //   this.selectIngredients.id = 'selectIngredients'
  //   this.selectIngredients.setAttribute('name', 'select-ingredients')
  //   this.selectIngredientsTitle = document.createElement('option')
  //   this.selectIngredientsTitle.textContent = 'Ingrédients'

  //   this.selectKitchenAppliances = document.createElement('select')
  //   this.selectKitchenAppliances.id = 'selectKitchenAplliances'
  //   this.selectKitchenAppliances.setAttribute('name', 'select-kitchen-appliances')
  //   this.selectKitchenAppliancesTitle = document.createElement('option')
  //   this.selectKitchenAppliancesTitle.textContent = 'Appareils'

  //   this.selectCookingTools = document.createElement('select')
  //   this.selectCookingTools.id = ('selectCookingTools')
  //   this.selectCookingTools.setAttribute('name', 'select-cooking-tools')
  //   this.selectCookingToolsTitle = document.createElement('option')
  //   this.selectCookingToolsTitle.textContent = 'Ustensiles'

  //   this.selectIngredients.appendChild(this.selectIngredientsTitle)
  //   this.selectKitchenAppliances.appendChild(this.selectKitchenAppliancesTitle)
  //   this.selectCookingTools.appendChild(this.selectCookingToolsTitle)

  //   this.selectContainer.appendChild(this.selectIngredients)
  //   this.selectContainer.appendChild(this.selectKitchenAppliances)
  //   this.selectContainer.appendChild(this.selectCookingTools)
  // }

  // buildElements () {
  //   this.btnFilterContainer1 = document.createElement('div')
  //   this.btnFilterContainer1.classList.add('btnFilterContainer')
  //   this.btnFilterContainer2 = document.createElement('div')
  //   this.btnFilterContainer2.classList.add('btnFilterContainer')
  //   this.btnFilterContainer3 = document.createElement('div')
  //   this.btnFilterContainer3.classList.add('btnFilterContainer')

  //   this.btnIngredientsFilter = document.createElement('span')
  //   this.btnIngredientsFilter.classList.add('filterBtn')
  //   this.btnIngredientsFilter.id = 'btnIngredientsFilter'
  //   this.btnIngredientsFilter.textContent = 'Ingrédients'

  //   this.btnKitchenAppliancesFilter = document.createElement('span')
  //   this.btnKitchenAppliancesFilter.classList.add('filterBtn')
  //   this.btnKitchenAppliancesFilter.id = 'btnKitchenAppliancesFilter'
  //   this.btnKitchenAppliancesFilter.textContent = 'Appareils'

  //   this.btnCookingToolsFilter = document.createElement('span')
  //   this.btnCookingToolsFilter.classList.add('filterBtn')
  //   this.btnCookingToolsFilter.id = 'btnCookingToolsFilter'
  //   this.btnCookingToolsFilter.textContent = 'Ustensiles'

  //   this.btnFilterContainer1.appendChild(this.btnIngredientsFilter)
  //   this.btnFilterContainer2.appendChild(this.btnKitchenAppliancesFilter)
  //   this.btnFilterContainer3.appendChild(this.btnCookingToolsFilter)
  //   this.selectContainer.appendChild(this.btnFilterContainer1)
  //   this.selectContainer.appendChild(this.btnFilterContainer2)
  //   this.selectContainer.appendChild(this.btnFilterContainer3)
  // }

  buildElements () {
    const btnFilterData = [
      {
        id: 'btnIngredientsFilter',
        textId: 'btnIngredientsFilterText',
        textContent: 'Ingrédients',
        dropDownId: 'btnIngredientsFilterDD'
      },
      {
        id: 'btnKitchenAppliancesFilter',
        textId: 'btnKitchenAppliancesFilterText',
        textContent: 'Appareils',
        dropDownId: 'btnKitchenAppliancesFilterDD'
      },
      {
        id: 'btnCookingToolsFilter',
        textId: 'btnCookingToolsFilterText',
        textContent: 'Ustensiles',
        dropDownId: 'btnCookingToolsFilterDD'
      }
    ]

    btnFilterData.forEach(el => {
      this.btnFilterContainer = document.createElement('div')
      this.btnFilterContainer.classList.add('btnFilterContainer')
      this.btnFilterContainer.id = el.id

      this.btnFilterDropdown = document.createElement('em')
      this.btnFilterDropdown.classList.add('btnFilterDropdown', 'fa-solid', 'fa-chevron-down')
      this.btnFilterDropdown.id = el.dropDownId

      this.btnFilterText = document.createElement('span')
      this.btnFilterText.classList.add('btnFilterText')
      this.btnFilterText.id = el.textId
      this.btnFilterText.textContent = el.textContent

      this.btnFilterContainer.appendChild(this.btnFilterText)
      this.btnFilterContainer.appendChild(this.btnFilterDropdown)
      this.selectContainer.appendChild(this.btnFilterContainer)
    })
  }
}
