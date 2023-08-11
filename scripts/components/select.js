import { getAllUstensils, getAllIngredient, getAllAppliance } from '../api/api.js'
import { InputSearch } from './inputSearch.js'
import { recipes } from '../../data/recipes.js'
import { body, filtersWrapper, tagsWrapper } from '../utils/var.js'

export class Select {
  constructor (onInput) {
    this.onInput = onInput
    this.extractElements()
    this.buildBtnFilter()
    this.buildElementFilters()
    this.DDElements()
  }

  extractElements () {
    this.body = body
    this.selectContainer = filtersWrapper
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
        id: 'btnApplianceFilter',
        textId: 'btnApplianceFilterText',
        textContent: 'Appareils',
        dropDownId: 'btnApplianceFilterDD'
      },
      {
        id: 'btnUstensilsFilter',
        textId: 'btnUstensilsFilterText',
        textContent: 'Ustensiles',
        dropDownId: 'btnUstensilsFilterDD'
      }
    ].forEach(el => {
      this.btnFilterWrapper = document.createElement('div')
      this.btnFilterWrapper.classList.add('btn_filter_wrapper')
      this.btnFilterWrapper.id = `${el.id}Wrapper`

      this.btnFilterContainer = document.createElement('div')
      this.btnFilterContainer.classList.add('btn_filter_container')
      this.btnFilterContainer.id = `${el.id}container`

      this.btnFilterDropdown = document.createElement('em')
      this.btnFilterDropdown.classList.add('btn_filter_dropdown', 'fa-solid', 'fa-chevron-down')
      this.btnFilterDropdown.id = el.dropDownId

      this.btnFilterText = document.createElement('span')
      this.btnFilterText.classList.add('btn_filter_text')
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
        getFunction: getAllIngredient,
        id: 'filterContainerIngredients',
        class: 'filter_ingredients',
        wrapper: 'btnIngredientsFilterWrapper'
      },
      {
        getFunction: getAllAppliance,
        id: 'filterContainerAppliance',
        class: 'filter_appliance',
        wrapper: 'btnApplianceFilterWrapper'
      },
      {
        getFunction: getAllUstensils,
        id: 'filterContainerUstensils',
        class: 'filter_ustensils',
        wrapper: 'btnUstensilsFilterWrapper'
      }
    ]
    data.forEach(d => {
      const elements = d.getFunction(recipes)
      const ul = this.buildFilterElementsList(elements, d.id, d.class)
      document.getElementById(d.wrapper).appendChild(ul)
    })
  }

  buildFilterElementsList (elements, id, contentClass) {
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
      this.btnFilterElement.classList.add('filter_content', `${contentClass}`)
      this.btnFilterElement.textContent = el
      ul.appendChild(this.btnFilterElement)
    })
    return ul
  }

  buildSearchBar (ul) {
    return new InputSearch('filter', ul, '', 'button', 30, this.onInput)
  }

  DDElements () {
    const data = [
      { id: 'Ingredients' },
      { id: 'Appliance' },
      { id: 'Ustensils' }
    ]
    data.forEach(d => {
      this[`btn${d.id}FilterDD`] = document.getElementById(`btn${d.id}FilterDD`)
      this[`filterContainer${d.id}`] = document.getElementById(`filterContainer${d.id}`)
      this.DDListener(this[`btn${d.id}FilterDD`], this[`filterContainer${d.id}`])
    })
  }

  DDListener (btnElementFilterDD, filterContainerElement) {
    let isDisplay = false

    btnElementFilterDD.addEventListener('click', () => {
      isDisplay = !isDisplay
      filterContainerElement.style.display = isDisplay ? 'block' : 'none'
      btnElementFilterDD.classList.toggle('fa-chevron-up', isDisplay)
      btnElementFilterDD.classList.toggle('fa-chevron-down', !isDisplay)
    })

    // close when click outside the filters area
    this.body.addEventListener('click', (e) => {
      this.tags = tagsWrapper.querySelector('.tags_container')
      if (!this.selectContainer.contains(e.target) && !this.tags.contains(e.target)) {
        filterContainerElement.style.display = 'none'
        btnElementFilterDD.classList.add('fa-chevron-down')
        btnElementFilterDD.classList.remove('fa-chevron-up')
        isDisplay = false
      }
    })
  }
}
