export class SearchBar {
  constructor (HeaderSearchBarInput) {
    this.HeaderSearchBarInput = HeaderSearchBarInput
    this.init()
    this.placeholder()
    this.validity()
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
}
