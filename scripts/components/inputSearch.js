export class InputSearch {
  constructor (Name, wrapper, placeholder) {
    this.name = Name
    this.wrapper = wrapper
    this.placeholder_Content = placeholder
    this.buildElements()
    this.init()
    this.placeholder()
    this.validity()
    this.xMark()
  }

  buildElements () {
    this.SearchBarContainer = document.createElement('form')
    this.SearchBarContainer.classList.add(`${this.name}_search-bar_container`)

    this.SearchBarInput = document.createElement('input')
    this.SearchBarInput.classList.add(`${this.name}_search-bar_input`)
    this.SearchBarInput.setAttribute('placeholder', this.placeholder_Content)
    this.SearchBarInput.setAttribute('type', 'text')
    this.SearchBarInput.setAttribute('this.name', 'search')
    this.SearchBarInput.setAttribute('value', '')
    this.SearchBarInput.setAttribute('maxlength', '100')

    this.SearchBarXmarkContainer = document.createElement('span')
    this.SearchBarXmarkContainer.classList.add(`${this.name}_search-bar_xmark_container`)
    this.SearchBarXmark = document.createElement('em')
    this.SearchBarXmark.classList.add('fa-solid', 'fa-xmark', `${this.name}_search-bar_xmark_icon`)
    this.SearchBarIconContainer = document.createElement('button')
    this.SearchBarIconContainer.id = `${this.name}_search-bar_button`
    this.SearchBarIconContainer.classList.add(`${this.name}_search-bar_icon_container`)
    this.SearchBarIconContainer.setAttribute('type', 'submit')
    this.SearchBarIcon = document.createElement('em')
    this.SearchBarIcon.classList.add('fa-solid', 'fa-magnifying-glass', `${this.name}_search-bar_icon`)
    this.SearchBarContainer.appendChild(this.SearchBarInput)
    this.SearchBarXmarkContainer.appendChild(this.SearchBarXmark)
    this.SearchBarContainer.appendChild(this.SearchBarXmarkContainer)
    this.SearchBarIconContainer.appendChild(this.SearchBarIcon)
    this.SearchBarContainer.appendChild(this.SearchBarIconContainer)
    this.wrapper.appendChild(this.SearchBarContainer)
  }

  init () {
    this.focus = (e) => {
      this.target = e.target.textContent = ''
      console.log(this.target)
      this.SearchBarInput.setAttribute('placeholder', this.target)
    }

    this.blur = (e) => {
      this.target = e.target.textContent = this.placeholder_Content
      this.SearchBarInput.setAttribute('placeholder', this.target)
    }
  }

  placeholder () {
    this.SearchBarInput.addEventListener('focus', this.focus)
    this.SearchBarInput.addEventListener('blur', this.blur)
  }

  validity () {
    this.SearchBarInput.value.trim() === '' ? this.SearchBarInput.setCustomValidity('champ vide') : this.SearchBarInput.setCustomValidity('')
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
    this.SearchBarInput.addEventListener('input', callBackInput)
  }

  xMark () {
    if (this.SearchBarInput.value.trim() === '') {
      this.SearchBarXmark.style.setProperty('display', 'none', 'important')
    }

    const inputXmark = (e) => {
      const value = e.target.value.trim()
      if (value === '') {
        this.SearchBarXmark.style.setProperty('display', 'none', 'important')
      } else {
        this.SearchBarXmark.style.display = 'flex'
      }
    }
    this.SearchBarInput.addEventListener('input', inputXmark)

    const clickXmark = (e) => {
      if (e) {
        this.SearchBarInput.value = ''
        this.xMark()
      }
    }
    this.SearchBarXmark.addEventListener('click', clickXmark)
  }
}
