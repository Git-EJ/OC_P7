/**
 * @param {string} Name for class an Id
 * @param {HTMLElement} wrapper for appendchild
 * @param {string} placeholder content for input placeholder
 * @param {string} type button type
 * @param {number} maxLength input maxlength
 */
export class InputSearch {
  constructor (Name, wrapper, placeholder, type, maxLength) {
    this.name = Name
    this.wrapper = wrapper
    this.placeholderContent = placeholder
    this.type = type
    this.maxLength = maxLength
    this.buildElements()
    this.init()
    this.placeholder()
    this.validity()
    this.xMark()
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
      console.log(this.target)
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

  validity () {
    this.searchBarInput.value.trim() === '' ? this.searchBarInput.setCustomValidity('champ vide') : this.searchBarInput.setCustomValidity('')
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
    this.searchBarInput.addEventListener('input', callBackInput)
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
        this.xMark()
      }
    }
    this.searchBarXmark.addEventListener('click', clickXmark)
  }
}
