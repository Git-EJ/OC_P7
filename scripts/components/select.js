import { getAllIngredient, getAllKitchenAppliance, getAllCookingTools } from '../api/api.js'


export class Select {
  constructor () {
    this.extractElements()
    this.buildBtnFilter()
    this.buildElementFilterIngredients()
    this.buildElementFilterKitchenAppliances()
    this.buildElementFilterCookingTools()
    this.buildFilterElementsList()
    this.DDIngredients()
    this.DDKitchenAppliances()
    this.DDCookingTools()
  }

  extractElements () {
    this.body = document.querySelector('body')
    this.selectContainer = document.querySelector('.filters_wrapper')
  }

  buildBtnFilter () {
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
      this.btnFilterWrapper = document.createElement('div')
      this.btnFilterWrapper.classList.add('btnFilterWrapper')
      this.btnFilterWrapper.id = `${el.id}Wrapper`

      this.btnFilterContainer = document.createElement('div')
      this.btnFilterContainer.classList.add('btnFilterContainer')
      this.btnFilterContainer.id = `${el.id}container`

      this.btnFilterDropdown = document.createElement('em')
      this.btnFilterDropdown.classList.add('btnFilterDropdown', 'fa-solid', 'fa-chevron-down')
      this.btnFilterDropdown.id = el.dropDownId

      this.btnFilterText = document.createElement('span')
      this.btnFilterText.classList.add('btnFilterText')
      this.btnFilterText.id = el.textId
      this.btnFilterText.textContent = el.textContent

      this.btnFilterContainer.appendChild(this.btnFilterText)
      this.btnFilterContainer.appendChild(this.btnFilterDropdown)
      this.btnFilterWrapper.appendChild(this.btnFilterContainer)
      this.selectContainer.appendChild(this.btnFilterWrapper)
    })
  }

  buildElementFilterIngredients () {
    this.btnIngredientsFilterWrapper = document.getElementById('btnIngredientsFilterWrapper')
    this.buildFilterElementsList(getAllIngredient())
    this.btnFilterElementList.id = 'filter_container_ingredients'
    this.btnIngredientsFilterWrapper.appendChild(this.btnFilterElementList)
  }

  buildElementFilterKitchenAppliances () {
    this.btnKitchenAppliancesFilterWrapper = document.getElementById('btnKitchenAppliancesFilterWrapper')
    this.buildFilterElementsList(getAllKitchenAppliance())
    this.btnFilterElementList.id = 'filter_container_kitchen_appliances'
    this.btnKitchenAppliancesFilterWrapper.appendChild(this.btnFilterElementList)
  }

  buildElementFilterCookingTools () {
    this.btnCookingToolsFilterWrapper = document.getElementById('btnCookingToolsFilterWrapper')
    this.buildFilterElementsList(getAllCookingTools())
    this.btnFilterElementList.id = 'filter_container_cooking_tools'
    this.btnCookingToolsFilterWrapper.appendChild(this.btnFilterElementList)
  }

  buildFilterElementsList (elements) {
    this.btnFilterElementList = document.createElement('ul')
    this.btnFilterElementList.classList.add('filter_container')

    elements && elements.forEach(el => {
      this.btnFilterElement = document.createElement('li')
      this.btnFilterElement.classList.add('filter_content')
      this.btnFilterElement.textContent = el
      this.btnFilterElementList.appendChild(this.btnFilterElement)
    })
  }

  DDIngredients () {
    this.btnIngredientsFilterDD = document.getElementById('btnIngredientsFilterDD')
    this.filterContainerIngredients = document.getElementById('filter_container_ingredients')
    this.DDListener(this.btnIngredientsFilterDD, this.filterContainerIngredients)
  }

  DDKitchenAppliances () {
    this.btnKitchenAppliancesFilterDD = document.getElementById('btnKitchenAppliancesFilterDD')
    this.filterKitchenAppliancesFilterDD = document.getElementById('filter_container_kitchen_appliances')
    this.DDListener(this.btnKitchenAppliancesFilterDD, this.filterKitchenAppliancesFilterDD)
  }

  DDCookingTools () {
    this.btnCookingToolsFilterDD = document.getElementById('btnCookingToolsFilterDD')
    this.filterContainerCookingTools = document.getElementById('filter_container_cooking_tools')
    this.DDListener(this.btnCookingToolsFilterDD, this.filterContainerCookingTools)
  }

  DDListener (btnElementFilterDD, filterContainerElement) {
    let isDisplay = false

    btnElementFilterDD.addEventListener('click', () => {
      filterContainerElement.style.display = isDisplay ? 'none' : 'block'
      isDisplay = !isDisplay

      if (isDisplay) {
        btnElementFilterDD.classList.add('fa-chevron-up')
        btnElementFilterDD.classList.remove('fa-chevron-down')
      } else {
        btnElementFilterDD.classList.add('fa-chevron-down')
        btnElementFilterDD.classList.remove('fa-chevron-up')
      }
    })

    // close when click outside the filters area
    this.body.addEventListener('click', (e) => {
      if (!this.selectContainer.contains(e.target)) {
        filterContainerElement.style.display = 'none'
        isDisplay = false
      }
    })
  }
}







// buildBtnFilter () {
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

  // buildBtnFilter () {
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
