import { InputSearch } from '../components/inputSearch.js'

export class Header {
  constructor () {
    this.extractElements()
    this.buildElements()
    this.title()
    this.textContent()
    this.searchBar()
  }

  extractElements () {
    this.headerWrapper = document.querySelector('.header_wrapper')
  }

  buildElements () {
    this.headerWrapper.classList.add('header_wrapper')

    this.bannerImg = document.createElement('img')
    this.bannerImg.classList.add('header_img')
    this.bannerImg.setAttribute('src', './assets/banner/banner_1440x667.jpg')
    this.bannerImg.setAttribute('alt', 'banner')
    this.bannerImg.setAttribute('ariaLabel', 'plat asiatique sur table en bois avec deux baquettes')

    this.headerWrapper.appendChild(this.bannerImg)
  }

  title () {
    this.headerTitleContainer = document.createElement('div')
    this.headerTitleContainer.classList.add('header_title_container')
    this.headerTitleContent = document.createElement('h2')
    this.headerTitleContent.classList.add('header_title_content')
    this.headerTitleContent.textContent = 'LES PETITS PLATS'

    // this.headerTitleContainer.innerHTML = 'LES PETITS PLATS <svg class="header_title_icon" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>'

    // this.headerTitleIconSvg = document.createElement('svg')
    // this.headerTitleIconSvg.classList.add('header_title_icon')
    // this.headerTitleIconSvg.setAttribute('viewBox', '0 0 512 512')
    // this.headerTitleIconPath = document.createElement('path')
    // this.headerTitleIconPath.setAttribute('d', 'M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z')

    // this.headerTitleIconSvg = document.createElement('img')
    // this.headerTitleIconSvg.classList.add('header_title_icon')
    // this.headerTitleIconSvg.setAttribute('src', '/assets/icons/circle-dot-regular.svg')

    this.headerTitleIcon = document.createElement('em')
    this.headerTitleIcon.classList.add('fa-regular', 'fa-circle-dot', 'header_title_icon')

    this.headerTitleContainer.appendChild(this.headerTitleContent)
    this.headerTitleContainer.appendChild(this.headerTitleIcon)
    // this.headerTitleIconSvg.appendChild(this.headerTitleIconPath)
    // this.headerTitleContainer.appendChild(this.headerTitleIconSvg)
    this.headerWrapper.appendChild(this.headerTitleContainer)
  }

  textContent () {
    this.headerTextContainer = document.createElement('div')
    this.headerTextContainer.classList.add('header_text_container')

    this.headerTextContent = document.createElement('h1')
    this.headerTextContent.classList.add('header_text_content')
    this.headerTextContent.textContent = 'CHERCHEZ PARMI PLUS DE 1500 RECETTES DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES'

    this.headerTextContainer.appendChild(this.headerTextContent)
    this.headerWrapper.appendChild(this.headerTextContainer)
  }

  searchBar () {
    this.placeholderContent = 'Rechercher une recette, un ingrédient,...'

    // eslint-disable-next-line no-unused-vars
    const inputSearch = new InputSearch('header', this.headerWrapper, this.placeholderContent, 'button', 100)
  }
}
