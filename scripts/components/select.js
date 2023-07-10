import { getAllIngredient } from '../api/api.js'
import { InputSearch } from './inputSearch.js'
import { recipes } from '../../data/recipes.js'

export class Select {
  constructor () {
    this.extractElements()
    this.buildBtnFilter()
    this.buildElementFilters()
    this.DDIngredients()
    this.DDKitchenAppliances()
    this.DDCookingTools()
  }

  extractElements () {
    this.body = document.querySelector('body')
    this.selectContainer = document.querySelector('.filters_wrapper')
  }

  buildBtnFilter () {
    [
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
    ].forEach(el => {
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

  buildElementFilters () {
    const data = [
      {
        id: 'filter_container_ingredients',
        wrapper: 'btnIngredientsFilterWrapper'
      },
      {
        id: 'filter_container_kitchen_appliances',
        wrapper: 'btnKitchenAppliancesFilterWrapper'
      },
      {
        id: 'filter_container_cooking_tools',
        wrapper: 'btnCookingToolsFilterWrapper'
      }
    ]
    data.forEach(d => {
      const ul = this.buildFilterElementsList(getAllIngredient(recipes), d.id)
      document.getElementById(d.wrapper).appendChild(ul)
    })
  }

  buildFilterElementsList (elements, id) {
    const ul = document.createElement('ul')
    ul.classList.add('filter_container')
    ul.id = id
    this.buildSearchBar(ul).onInput = (e) => {
      const search = e.target.value.toLowerCase()
      const elements = [...ul.querySelectorAll('li')]
      elements.forEach(el => {
        if (!el.textContent.toLowerCase().startsWith(search)) {
          el.classList.add('hidden')
        } else {
          el.classList.remove('hidden')
        }
      })
    }
    elements && elements.forEach(el => {
      this.btnFilterElement = document.createElement('li')
      this.btnFilterElement.classList.add('filter_content')
      this.btnFilterElement.textContent = el
      ul.appendChild(this.btnFilterElement)
    })
    return ul
  }

  buildSearchBar (ul) {
    return new InputSearch('filter', ul, '', 'button', 30)
  }

  // [TODO - refactoriser - START]
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
  // [TODO - refactoriser - END]

  DDListener (btnElementFilterDD, filterContainerElement) {
    let isDisplay = false

    btnElementFilterDD.addEventListener('click', () => {
      isDisplay = !isDisplay
      filterContainerElement.style.display = isDisplay ? 'block' : 'none'
      btnElementFilterDD.classList.add('fa-chevron-' + (isDisplay ? 'up' : 'down'))
      btnElementFilterDD.classList.remove('fa-chevron-' + (isDisplay ? 'down' : 'up'))
    })

    // close when click outside the filters area
    this.body.addEventListener('click', (e) => {
      if (!this.selectContainer.contains(e.target)) {
        filterContainerElement.style.display = 'none'
        btnElementFilterDD.classList.add('fa-chevron-down')
        btnElementFilterDD.classList.remove('fa-chevron-up')
        isDisplay = false
      }
    })
  }
}
