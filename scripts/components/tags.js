import { tagsFilter, tagsOnDisplay } from '../utils/filterByTags.js'

export class Tags {
  constructor () {
    this.selectedTags = null
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
    this.tagsWrapper.appendChild(this.tagsContainer)

    this.filterIngredients = document.querySelectorAll('.filter_ingredients')
    this.filterKitchenAplliances = document.querySelectorAll('.filter_kitchen-appliances')
    this.filterCookingTools = document.querySelectorAll('.filter_cooking-tools')
  }

  /**
   * @param {string} liTextContent = filter text content (li)
   */
  buildTag (liTextContent) {
    const tagContainer = document.createElement('div')
    tagContainer.classList.add('tag_container')
    tagContainer.id = `tag_container_${liTextContent}`

    const tagsText = document.createElement('span')
    tagsText.classList.add('tag_text')
    tagsText.textContent = liTextContent

    const tagsXmark = document.createElement('em')
    tagsXmark.classList.add('fa-solid', 'fa-xmark', 'tag_xmark')
    tagsXmark.id = `tag_xmark_${liTextContent}`

    tagContainer.appendChild(tagsText)
    tagContainer.appendChild(tagsXmark)
    this.tagsContainer.appendChild(tagContainer)
    return tagContainer
  }

  tagDisplay () {
    this.filterContent.forEach(li => {
      li.addEventListener('click', (e) => {
        // console.log(e.target.textContent)
        let tagDisplay = false

        const tags = document.querySelectorAll('.tag_container')
        tags.forEach(t => {
          if (t.id === `tag_container_${li.textContent}`) {
            tagDisplay = true
          }
        })

        if (!tagDisplay) {
          const thisTag = this.buildTag(li.textContent)

          const filterElements = (elements, elementClass) => { // for background color tag
            return elements.forEach(fi => {
              if (li === fi) {
                thisTag.classList.add(elementClass)
                this.selectedTags && this.selectedTags(e)
              }
            })
          }

          filterElements(this.filterIngredients, 'tag_ingredient')
          filterElements(this.filterKitchenAplliances, 'tag_kitchen-appliances')
          filterElements(this.filterCookingTools, 'tag_cooking-tools')

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
      const removedTag = tagContainer.textContent.toLowerCase()

      tagContainer.remove()

      const remainingTags = []
      document.querySelectorAll('.tag_container').forEach(tag => {
        const tagText = tag.textContent.toLowerCase()
        if (tagText !== removedTag) {
          remainingTags.push(tagText)
        }
      })

      // Update tagsOnDisplay
      tagsOnDisplay.length = 0
      tagsOnDisplay.push(...remainingTags)
      tagsFilter()
      e.stopPropagation()
    }

    this.close.forEach(el => {
      el.addEventListener('click', clickXmark)
    })
  }
}
