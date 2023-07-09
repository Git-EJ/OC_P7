import { SearchBar } from './headerSearchBar.js'

export class Header {
  constructor () {
    this.extractElements()
    this.buildElements()
    this.title()
    this.textContent()
    this.searchBar()
  }

  extractElements () {
    this.HeaderWrapper = document.querySelector('.header_wrapper')
  }

  buildElements () {
    this.HeaderWrapper.classList.add('header_wrapper')

    this.BannerImg = document.createElement('img')
    this.BannerImg.classList.add('header_img')
    this.BannerImg.setAttribute('src', './assets/banner/banner_1440x667.jpg')
    this.BannerImg.setAttribute('alt', 'Banner')
    this.BannerImg.setAttribute('ariaLabel', 'plat asiatique sur table en bois avec deux baquettes')

    this.HeaderWrapper.appendChild(this.BannerImg)
  }

  title () {
    this.HeaderTitleContainer = document.createElement('div')
    this.HeaderTitleContainer.classList.add('header_title_container')
    this.HeaderTitleContent = document.createElement('h2')
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
    this.HeaderWrapper.appendChild(this.HeaderTitleContainer)
  }

  textContent () {
    this.HeaderTextContainer = document.createElement('div')
    this.HeaderTextContainer.classList.add('header_text_container')

    this.HeaderTextContent = document.createElement('h1')
    this.HeaderTextContent.classList.add('header_text_content')
    this.HeaderTextContent.textContent = 'CHERCHEZ PARMI PLUS DE 1500 RECETTES DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES'

    this.HeaderTextContainer.appendChild(this.HeaderTextContent)
    this.HeaderWrapper.appendChild(this.HeaderTextContainer)
  }

  searchBar () {
    // eslint-disable-next-line no-unused-vars
    const toto = new SearchBar(this.HeaderWrapper)
  }
}
