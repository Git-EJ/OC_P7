import { InputSearch } from '../components/inputSearch.js'

export class Header {
  constructor (onInput) {
    this.onInput = onInput
    this.extractElements()
    this.buildElements()
  }

  extractElements () {
    this.headerWrapper = document.querySelector('.header_wrapper')
  }

  buildElements () {
    this.buildBannerImg()
    this.buildTitle()
    this.buildTextContent()
    this.buildSearchBar()
  }

  buildBannerImg () {
    this.bannerImg = document.createElement('img')
    this.bannerImg.classList.add('header_img')
    this.bannerImg.setAttribute('src', './assets/banner/banner_1440x667.jpg')
    this.bannerImg.setAttribute('alt', 'banner')
    this.bannerImg.setAttribute('ariaLabel', 'plat asiatique sur table en bois avec deux baquettes')

    this.headerWrapper.appendChild(this.bannerImg)
  }

  buildTitle () {
    this.headerTitleContainer = document.createElement('div')
    this.headerTitleContainer.classList.add('header_title_container')
    this.headerTitleContent = document.createElement('h2')
    this.headerTitleContent.classList.add('header_title_content')
    this.headerTitleContent.textContent = 'LES PETITS PLATS'

    this.headerTitleIcon = document.createElement('em')
    this.headerTitleIcon.classList.add('fa-regular', 'fa-circle-dot', 'header_title_icon')

    this.headerTitleContainer.appendChild(this.headerTitleContent)
    this.headerTitleContainer.appendChild(this.headerTitleIcon)
    this.headerWrapper.appendChild(this.headerTitleContainer)
  }

  buildTextContent () {
    this.headerTextContainer = document.createElement('div')
    this.headerTextContainer.classList.add('header_text_container')

    this.headerTextContent = document.createElement('h1')
    this.headerTextContent.classList.add('header_text_content')
    this.headerTextContent.textContent = 'CHERCHEZ PARMI PLUS DE 1500 RECETTES DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES'

    this.headerTextContainer.appendChild(this.headerTextContent)
    this.headerWrapper.appendChild(this.headerTextContainer)
  }

  buildSearchBar () {
    this.placeholderContent = 'Rechercher une recette, un ingrédient,...'
    this.searchBar = new InputSearch('header', this.headerWrapper, this.placeholderContent, 'button', 100, this.onInput)
  }
}
