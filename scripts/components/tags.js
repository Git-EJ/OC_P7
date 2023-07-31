export class Tags {
  constructor () {
    this.selectedTags = null
    this.tagsWrapper = document.querySelector('.tags_wrapper')
    this.listWrapper = document.querySelector('.filters_wrapper')
    this.buildTagsContainer()
    this.tagDisplay()
  }

  buildTagsContainer () {
    this.tagsContainer = document.createElement('div')
    this.tagsContainer.classList.add('tags_container')
    this.tagsWrapper.appendChild(this.tagsContainer)

    this.filterIngredients = this.listWrapper.querySelectorAll('.filter_ingredients')
    this.filterAppliance = this.listWrapper.querySelectorAll('.filter_appliance')
    this.filterUstensils = this.listWrapper.querySelectorAll('.filter_ustensils')
    this.filterContent = [
      {
        tagClassName: 'tag_ingredient',
        list: this.filterIngredients
      },
      {
        tagClassName: 'tag_appliance',
        list: this.filterAppliance
      },
      {
        tagClassName: 'tag_ustensils',
        list: this.filterUstensils
      }
    ]
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
    this.filterContent.forEach(menu => {
      const className = menu.tagClassName
      menu.list.forEach(li => {
        li.addEventListener('click', (e) => {
          // console.log(e.target.textContent)
          let tagDisplay = false

          const tags = this.tagsWrapper.querySelectorAll('.tag_container')
          tags.forEach(t => {
            if (t.id === `tag_container_${li.textContent}`) {
              tagDisplay = true
            }
          })

          if (!tagDisplay) {
            const thisTag = this.buildTag(li.textContent)
            thisTag.classList.add(className)
            this.selectedTags && this.selectedTags()
            const that = this
            const xMark = thisTag.querySelector('.tag_xmark')
            xMark.addEventListener('click', () => {
              thisTag.remove()
              that.selectedTags && that.selectedTags()
            })
          }
        })
      })
    })
  }
}
