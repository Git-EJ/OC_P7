export class Tags {
  constructor () {
    this.extractElements()
    this.buildTagsContainer()
    this.tagDisplay()
    this.closeTag()
  }

  extractElements () {
    this.tagsWrapper = document.querySelector('.tags_wrapper')
    this.filterContent = document.querySelectorAll('li')
  }

  buildTagsContainer () {
    this.tagsContainer = document.createElement('div')
    this.tagsContainer.classList.add('tags_container')
    this.filterIngredients = document.querySelectorAll('.filter_ingredients')
    this.filterKitchenAplliances = document.querySelectorAll('.filter_kitchen-appliances')
    this.filterCookingTools = document.querySelectorAll('.filter_cooking-tools')
  }

  /**
   * @param {string} liTextContent = filter text content (li)
   */
  buildTags (liTextContent) {
    this.tagContainer = document.createElement('div')
    this.tagContainer.classList.add('tag_container')
    this.tagContainer.id = `tag_container_${liTextContent}`

    this.tagsText = document.createElement('span')
    this.tagsText.classList.add('tag_text')
    this.tagsText.textContent = liTextContent

    this.tagsXmark = document.createElement('em')
    this.tagsXmark.classList.add('fa-solid', 'fa-xmark', 'tag_xmark')
    this.tagsXmark.id = `tag_xmark_${liTextContent}`

    this.tagContainer.appendChild(this.tagsText)
    this.tagContainer.appendChild(this.tagsXmark)
    this.tagsContainer.appendChild(this.tagContainer)
    this.tagsWrapper.appendChild(this.tagsContainer)
  }

  tagDisplay () {
    this.filterContent.forEach(li => {
      li.addEventListener('click', () => {
        let tagDisplay = false

        const tags = document.querySelectorAll('.tag_container')
        tags.forEach(t => {
          if (t.id === `tag_container_${li.textContent}`) {
            tagDisplay = true
          }
        })

        if (!tagDisplay) {
          this.buildTags(li.textContent)

          this.filterIngredients.forEach(fi => { // for background color tag
            if (li === fi) {
              this.tagContainer.classList.add('tag_ingredient')
            }
          })

          this.filterKitchenAplliances.forEach(fka => { // for background color tag
            if (li === fka) {
              this.tagContainer.classList.add('tag_kitchen-appliances')
            }
          })

          this.filterCookingTools.forEach(fi => { // for background color tag
            if (li === fi) {
              this.tagContainer.classList.add('tag_cooking-tools')
            }
          })

          this.closeTag()
        }
      })
    })
  }

  closeTag () {
    this.close = document.querySelectorAll('.tag_xmark')

    const clickXmark = (e) => {
      const xMarkContainer = e.target
      const tagContainer = xMarkContainer.parentNode
      tagContainer.remove()
    }
    this.close.forEach(el => {
      el.addEventListener('click', clickXmark)
    })
  }
}
