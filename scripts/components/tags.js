export class Tags {
  constructor () {
    this.extractElements()
    this.buildElements()
    this.closeTag()
  }

  extractElements () {
    this.tagsWrapper = document.querySelector('.tags_wrapper')
  }

  buildElements () {
    this.tagsContainer = document.createElement('div')
    this.tagsContainer.classList.add('tags_container')

    for (let i = 0; i < 6; i++) {
      this.tagContainer = document.createElement('div')
      this.tagContainer.classList.add('tag_container')
      this.tagContainer.id = 'tag_container' + i

      this.tagsText = document.createElement('span')
      this.tagsText.classList.add('tag_text')
      this.tagsText.textContent = 'Lait de tata ' + i

      this.tagsXmark = document.createElement('em')
      this.tagsXmark.classList.add('fa-solid', 'fa-xmark', 'tag_xmark')
      this.tagsXmark.id = 'tag_xmark' + i

      this.tagContainer.appendChild(this.tagsText)
      this.tagContainer.appendChild(this.tagsXmark)
      this.tagsContainer.appendChild(this.tagContainer)
    }
    this.tagsWrapper.appendChild(this.tagsContainer)
  }

  closeTag () {
    this.close = document.querySelectorAll('.tag_xmark')

    const clickXmark = (e) => {
      const xContainer = e.target
      const tagContainer = xContainer.parentNode
      tagContainer.remove()
    }

    this.close.forEach(el => {
      el.addEventListener('click', clickXmark)
    })
  }
}
