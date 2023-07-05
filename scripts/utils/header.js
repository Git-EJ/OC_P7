import { SearchBar } from '../components/searchBar.js'

export class Header {
  constructor () {
    this.extractElements()
    this.buildElements()
    this.title()
    this.textContent()
    this.searchBar()
  }

  extractElements () {
    this.HeaderContainer = document.querySelector('.header_container')
  }

  buildElements () {
    this.HeaderContainer.classList.add('header_container')

    this.BannerImg = document.createElement('img')
    this.BannerImg.classList.add('header_img')
    this.BannerImg.setAttribute('src', './assets/banner/banner_1440x667.jpg')
    this.BannerImg.setAttribute('alt', 'Banner')
    this.BannerImg.setAttribute('ariaLabel', 'plat asiatique sur table en bois avec deux baquettes')

    this.HeaderContainer.appendChild(this.BannerImg)
  }

  title () {
    this.HeaderTitleContainer = document.createElement('div')
    this.HeaderTitleContainer.classList.add('header_title_container')
    this.HeaderTitleContent = document.createElement('span')
    this.HeaderTitleContent.classList.add('header_title_content')
    this.HeaderTitleContent.textContent = 'LES PETITS PLATS'

    // this.HeaderTitleContainer.innerHTML = 'LES PETITS PLATS <svg class="header_title_icon" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>'

    // this.HeaderTitleIconSvg = document.createElement('svg')
    // this.HeaderTitleIconSvg.classList.add('header_title_icon')
    // this.HeaderTitleIconSvg.setAttribute('viewBox', '0 0 512 512')
    // this.HeaderTitleIconPath = document.createElement('path')
    // this.HeaderTitleIconPath.setAttribute('d', 'M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z')

    // this.HeaderTitleIconSvg = document.createElement('img')
    // this.HeaderTitleIconSvg.classList.add('header_title_icon')
    // this.HeaderTitleIconSvg.setAttribute('src', '/assets/icons/circle-dot-regular.svg')

    this.HeaderTitleIcon = document.createElement('em')
    this.HeaderTitleIcon.classList.add('fa-regular', 'fa-circle-dot', 'header_title_icon')

    this.HeaderTitleContainer.appendChild(this.HeaderTitleContent)
    this.HeaderTitleContainer.appendChild(this.HeaderTitleIcon)
    // this.HeaderTitleIconSvg.appendChild(this.HeaderTitleIconPath)
    // this.HeaderTitleContainer.appendChild(this.HeaderTitleIconSvg)
    this.HeaderContainer.appendChild(this.HeaderTitleContainer)
  }

  textContent () {
    this.HeaderTextContainer = document.createElement('div')
    this.HeaderTextContainer.classList.add('header_text_container')

    this.HeaderTextContent = document.createElement('span')
    this.HeaderTextContent.classList.add('header_text_content')
    this.HeaderTextContent.textContent = 'CHERCHEZ PARMI PLUS DE 1500 RECETTES DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES'

    this.HeaderTextContainer.appendChild(this.HeaderTextContent)
    this.HeaderContainer.appendChild(this.HeaderTextContainer)
  }

  searchBar () {
    this.HeaderSearchBarContainer = document.createElement('form')
    this.HeaderSearchBarContainer.classList.add('header_search-bar_container')

    this.HeaderSearchBarInput = document.createElement('input')
    this.HeaderSearchBarInput.classList.add('header_search-bar_input')
    this.HeaderSearchBarInput.setAttribute('placeholder', 'Rechercher une recette, un ingrédient,...')
    this.HeaderSearchBarInput.setAttribute('type', 'text')
    this.HeaderSearchBarInput.setAttribute('name', 'search')
    this.HeaderSearchBarInput.setAttribute('value', '')
    this.HeaderSearchBarInput.setAttribute('maxlength', '100')

    this.HeaderSearchBarIconContainer = document.createElement('button')
    this.HeaderSearchBarIconContainer.id = 'header_search_button'
    this.HeaderSearchBarIconContainer.classList.add('header_search-bar_icon_container')
    this.HeaderSearchBarIconContainer.setAttribute('type', 'submit')

    this.HeaderSearchBarIcon = document.createElement('em')
    this.HeaderSearchBarIcon.classList.add('fa-solid', 'fa-magnifying-glass', 'header_search-bar_icon')

    this.HeaderSearchBarContainer.appendChild(this.HeaderSearchBarInput)
    this.HeaderSearchBarIconContainer.appendChild(this.HeaderSearchBarIcon)
    this.HeaderSearchBarContainer.appendChild(this.HeaderSearchBarIconContainer)
    this.HeaderContainer.appendChild(this.HeaderSearchBarContainer)

    const toto = new SearchBar(this.HeaderSearchBarInput)
  }
}
