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
    this.HeaderSearchBarInput.value === '' ? this.HeaderSearchBarInput.setCustomValidity('champ vide') : this.HeaderSearchBarInput.setCustomValidity('')

    this.HeaderSearchBarInput.addEventListener('input', (e) => {
      const regex = /^[a-zA-Z àùéèç]+$/
      if (!regex.test(e.target.value)) {
        e.target.setCustomValidity('Caractère(s) non autorisé(s)')
        return false
      } else {
        e.target.setCustomValidity('')
      }

      if (e.target.value === '') {
        e.target.setCustomValidity('recherche vide')
        return false
      } else {
        e.target.setCustomValidity('')
      }
    })
  }
}
