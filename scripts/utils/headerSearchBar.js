import { InputSearch } from '../components/inputSearch.js'

export class SearchBar {
  constructor (HeaderWrapper) {
    this.HeaderWrapper = HeaderWrapper
    this.placeholderContent()
    this.buildElements()
    this.input()
  }

  placeholderContent () {
    this.placeholder_content = 'Rechercher une recette, un ingrédient,...'
  }

  buildElements () {
    this.HeaderSearchBarContainer = document.createElement('form')
    this.HeaderSearchBarContainer.classList.add('header_search-bar_container')

    this.HeaderSearchBarInput = document.createElement('input')
    this.HeaderSearchBarInput.classList.add('header_search-bar_input')
    this.HeaderSearchBarInput.setAttribute('placeholder', this.placeholder_content)
    this.HeaderSearchBarInput.setAttribute('type', 'text')
    this.HeaderSearchBarInput.setAttribute('name', 'search')
    this.HeaderSearchBarInput.setAttribute('value', '')
    this.HeaderSearchBarInput.setAttribute('maxlength', '100')

    this.HeaderSearchBarXmarkContainer = document.createElement('span')
    this.HeaderSearchBarXmarkContainer.classList.add('header_search-bar_xmark_container')

    this.HeaderSearchBarXmark = document.createElement('em')
    this.HeaderSearchBarXmark.classList.add('fa-solid', 'fa-xmark', 'header_search-bar_xmark_icon')

    this.HeaderSearchBarIconContainer = document.createElement('button')
    this.HeaderSearchBarIconContainer.id = 'header_search-bar_button'
    this.HeaderSearchBarIconContainer.classList.add('header_search-bar_icon_container')
    this.HeaderSearchBarIconContainer.setAttribute('type', 'submit')

    this.HeaderSearchBarIcon = document.createElement('em')
    this.HeaderSearchBarIcon.classList.add('fa-solid', 'fa-magnifying-glass', 'header_search-bar_icon')

    this.HeaderSearchBarContainer.appendChild(this.HeaderSearchBarInput)
    this.HeaderSearchBarXmarkContainer.appendChild(this.HeaderSearchBarXmark)
    this.HeaderSearchBarContainer.appendChild(this.HeaderSearchBarXmarkContainer)
    this.HeaderSearchBarIconContainer.appendChild(this.HeaderSearchBarIcon)
    this.HeaderSearchBarContainer.appendChild(this.HeaderSearchBarIconContainer)
    this.HeaderWrapper.appendChild(this.HeaderSearchBarContainer)
  }

  input () {
    // eslint-disable-next-line no-unused-vars
    const inputSearch = new InputSearch(this.HeaderSearchBarInput, this.HeaderSearchBarXmark, this.placeholder_content)
  }
}
