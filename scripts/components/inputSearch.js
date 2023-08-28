import { cardsWrapper } from '../utils/var.js'

/**
 * @param {String} Name for class an Id
 * @param {HTMLElement} wrapper for appendchild
 * @param {String} placeholder content for input placeholder
 * @param {String} type button type
 * @param {Number} maxLength input maxlength
 * @param {String} onInput input value
 */
export class InputSearch {
  constructor (Name, wrapper, placeholder, type, maxLength, onInput = null) {
    this.name = Name
    this.wrapper = wrapper
    this.placeholderContent = placeholder
    this.type = type
    this.maxLength = maxLength
    this.onInput = onInput
    this.buildElements()
    this.init()
    this.placeholder()
    this.validity()
    this.xMark()
  }

  get value () {
    return this.searchBarInput.value
  }

  buildElements () {
    this.searchBarContainer = document.createElement('form')
    this.searchBarContainer.classList.add(`${this.name}_search-bar_container`)

    this.searchBarInput = document.createElement('input')
    this.searchBarInput.classList.add(`${this.name}_search-bar_input`)
    this.searchBarInput.setAttribute('placeholder', this.placeholderContent)
    this.searchBarInput.setAttribute('type', 'text')
    this.searchBarInput.setAttribute('name', 'search')
    this.searchBarInput.setAttribute('value', '')
    this.searchBarInput.setAttribute('maxlength', this.maxLength)

    this.searchBarXmarkContainer = document.createElement('span')
    this.searchBarXmarkContainer.classList.add(`${this.name}_search-bar_xmark_container`)
    this.searchBarXmark = document.createElement('em')
    this.searchBarXmark.classList.add('fa-solid', 'fa-xmark', `${this.name}_search-bar_xmark_icon`)

    this.searchBarIconContainer = document.createElement('button')
    this.searchBarIconContainer.id = `${this.name}_search-bar_button`
    this.searchBarIconContainer.classList.add(`${this.name}_search-bar_icon_container`)
    this.searchBarIconContainer.setAttribute('type', this.type)

    this.searchBarIcon = document.createElement('em')
    this.searchBarIcon.classList.add('fa-solid', 'fa-magnifying-glass', `${this.name}_search-bar_icon`)

    this.searchBarContainer.appendChild(this.searchBarInput)
    this.searchBarXmarkContainer.appendChild(this.searchBarXmark)
    this.searchBarContainer.appendChild(this.searchBarXmarkContainer)
    this.searchBarIconContainer.appendChild(this.searchBarIcon)
    this.searchBarContainer.appendChild(this.searchBarIconContainer)
    this.wrapper.appendChild(this.searchBarContainer)
  }

  init () {
    this.focus = (e) => {
      this.target = e.target.textContent = ''
      this.searchBarInput.setAttribute('placeholder', this.target)
    }

    this.blur = (e) => {
      this.target = e.target.textContent = this.placeholderContent
      this.searchBarInput.setAttribute('placeholder', this.target)
    }
  }

  placeholder () {
    this.searchBarInput.addEventListener('focus', this.focus)
    this.searchBarInput.addEventListener('blur', this.blur)
  }

  validity (pRegex = '') {
    this.searchBarInput.value.trim() === '' ? this.searchBarInput.setCustomValidity('champ vide') : this.searchBarInput.setCustomValidity('')
    let timeout = null
    const that = this
    // let n = 0

    const callBackInput = (e) => {
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        const regex = pRegex === '' ? /^[a-zA-Z àùéèç]+$/ : pRegex
        const newValue = e.target.value.replace('  ', ' ').toLowerCase() // s for any whitespace character ; g for global. All matches (don't return after first match)
        if (e.target.value !== newValue) {
          this.searchBarInput.value = newValue
        }

        if (e.target.value.trim() === '') {
          e.target.setCustomValidity('recherche vide')
          that.onInput && that.onInput(e)
        } else if (!regex.test(e.target.value)) {
          e.target.setCustomValidity('Caractère(s) non autorisé(s)')
        } else {
          this.searchBarInput.value = newValue.trim()
          e.target.setCustomValidity('')
          that.onInput && that.onInput(e)
        }
      }, 1000)
    }
    this.searchBarInput.addEventListener('input', callBackInput)
    this.searchBarContainer.onsubmit = (e) => {
      e.preventDefault()
      callBackInput({ target: this.searchBarInput })
    }
  }

  xMark () {
    if (this.searchBarInput.value.trim() === '') {
      this.searchBarXmark.style.setProperty('display', 'none', 'important')
    }

    const inputXmark = (e) => {
      const value = e.target.value.trim()
      if (value === '') {
        this.searchBarXmark.style.setProperty('display', 'none', 'important')
      } else {
        this.searchBarXmark.style.display = 'flex'
      }
    }
    this.searchBarInput.addEventListener('input', inputXmark)

    const clickXmark = (e) => {
      if (e) {
        this.searchBarInput.value = ''
        this.onInput && this.onInput(e)
        cardsWrapper.classList.remove('cards_wrapper_filter_no-match')
      }
    }
    this.searchBarXmark.addEventListener('click', clickXmark)
  }
}
