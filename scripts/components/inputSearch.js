export class InputSearch {
  constructor (input, xMarkIcon, placeholderContent) {
    this.input = input
    this.xMarkIcon = xMarkIcon
    this.placeholderContent = placeholderContent
    this.init()
    this.placeholder()
    this.validity()
    this.xMark()
  }

  init () {
    this.focus = (e) => {
      this.target = e.target.textContent = ''
      this.input.setAttribute('placeholder', this.target)
    }

    this.blur = (e) => {
      this.target = e.target.textContent = this.placeholderContent
      this.input.setAttribute('placeholder', this.target)
    }
  }

  placeholder () {
    this.input.addEventListener('focus', this.focus)
    this.input.addEventListener('blur', this.blur)
  }

  validity () {
    this.input.value.trim() === '' ? this.input.setCustomValidity('champ vide') : this.input.setCustomValidity('')
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
    this.input.addEventListener('input', callBackInput)
  }

  xMark () {
    if (this.input.value.trim() === '') {
      this.xMarkIcon.style.setProperty('display', 'none', 'important')
    }

    const inputXmark = (e) => {
      const value = e.target.value.trim()
      if (value === '') {
        this.xMarkIcon.style.setProperty('display', 'none', 'important')
      } else {
        this.xMarkIcon.style.display = 'flex'
      }
    }
    this.input.addEventListener('input', inputXmark)

    const clickXmark = (e) => {
      if (e) {
        this.input.value = ''
        this.xMark()
      }
    }
    this.xMarkIcon.addEventListener('click', clickXmark)
  }
}
