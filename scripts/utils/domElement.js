/**
 *
 * @param {string} src path for img
 * @param {string} alt for img
 * @param {Array<string>} classes class for img
 * @param {NodeElement} parent or null
 * @returns {DOMElement} img for recipe
 */
export const createImage = (src, alt, classes, parent = null) => {
  const img = document.createElement('img')
  classes && classes.length && img.classList.add(...classes)
  img.setAttribute('alt', alt)
  img.setAttribute('src', src)
  parent && parent.appendChild(img)
  return img
}

/**
 * Create a dom element
 * @param {string} tag balise
 * @param {Array<string>} classes array of classes (or null)
 * @param {string} id id ...
 * @param {string} textContent as it's named
 * @param {NodeElement} parent or null
 * @returns {NodeElement} the newly created element
 */
export const createElement = (tag, classes = null, id = null, textContent = null, parent = null) => {
  const element = document.createElement(tag)
  classes && classes.length && element.classList.add(...classes)
  id && element.setAttribute('id', id)
  textContent && (element.textContent = textContent)
  parent && parent.appendChild(element)
  return element
}
