export class SearchBar {
  constructor (HeaderContainer) {
    this.HeaderContainer = HeaderContainer
    this.buildElements()
    this.init()
    this.placeholder()
    this.validity()
    this.xMark()
  }

  buildElements () {
    this.HeaderSearchBarContainer = document.createElement('form')
    this.HeaderSearchBarContainer.classList.add('header_search-bar_container')

    this.HeaderSearchBarInput = document.createElement('input')
    this.HeaderSearchBarInput.classList.add('header_search-bar_input')
    this.HeaderSearchBarInput.setAttribute('placeholder', 'Rechercher une recette, un ingrédient,...')
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
    this.HeaderContainer.appendChild(this.HeaderSearchBarContainer)
  }

  init () {
    this.focus = (e) => {
      this.target = e.target.textContent = ''
      this.HeaderSearchBarInput.setAttribute('placeholder', this.target)
    }

    this.blur = (e) => {
      this.target = e.target.textContent = 'Rechercher une recette, un ingrédient,...'
      this.HeaderSearchBarInput.setAttribute('placeholder', this.target)
    }
  }

  placeholder () {
    this.HeaderSearchBarInput.addEventListener('focus', this.focus)
    this.HeaderSearchBarInput.addEventListener('blur', this.blur)
  }

  validity () {
    this.HeaderSearchBarInput.value.trim() === '' ? this.HeaderSearchBarInput.setCustomValidity('champ vide') : this.HeaderSearchBarInput.setCustomValidity('')
    let timeout = null

    const callBackInput = (e) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        const regex = /^[a-zA-Z àùéèç]+$/
        let value = e.target.value.trim()
        const newValue = value.replace(/\s{1,}/g, ' ') // s for any whitespace character ; g for global. All matches (don't return after first match)
        if (value === '') {
          e.target.setCustomValidity('recherche vide')
        } else if (!regex.test(value)) {
          e.target.setCustomValidity('Caractère(s) non autorisé(s)')
        } else if (value.length !== newValue.length) {
          value = newValue
          console.log('value', value)
        } else {
          e.target.setCustomValidity('')
        }
      }, 500)
      e.target.setCustomValidity('tempo') // [DEV]
    }
    this.HeaderSearchBarInput.addEventListener('input', callBackInput)
  }

  xMark () {
    if (this.HeaderSearchBarInput.value.trim() === '') {
      this.HeaderSearchBarXmark.style.setProperty('display', 'none', 'important')
    }

    const inputXmark = (e) => {
      const value = e.target.value.trim()
      if (value === '') {
        this.HeaderSearchBarXmark.style.setProperty('display', 'none', 'important')
      } else {
        this.HeaderSearchBarXmark.style.display = 'flex'
      }
    }
    this.HeaderSearchBarInput.addEventListener('input', inputXmark)

    const clickXmark = (e) => {
      if (e) {
        this.HeaderSearchBarInput.value = ''
        this.xMark()
      }
    }
    this.HeaderSearchBarXmark.addEventListener('click', clickXmark)
  }
}
