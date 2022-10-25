import Vue from 'vue'

function ghostFactory(item) {
  const tag = item.tagName.toLowerCase()
  const ghostClass = 'kit-draggable__ghost-element'

  const ghost = document.createElement(tag)
  const styledElement = document.createElement('div')

  if (tag === 'tr') {
    const td = document.createElement('td')
    // this does not take into account whether an existing td has a colspan
    td.colSpan = item.childNodes.length
    ghost.appendChild(td)
    td.appendChild(styledElement)
  } else {
    ghost.appendChild(styledElement)
  }

  styledElement.classList.add(ghostClass)

  const style = `
    min-width: 20px;
    min-height: 1.5em;
    border-style: dashed;
    border-color: #b3bac5;
    border-width: 2px;
    padding: 2px;
    content: ' ';
    `

  styledElement.setAttribute('style', style)

  // make it sexy for the drop
  ghost.addEventListener('dragenter', (event) => event.preventDefault())
  ghost.addEventListener('dragover', (event) => {
    event.dataTransfer.dropEffect = "move";
    event.preventDefault()
  })

  // make it sexy for the eye when hovering the dropzone
  styledElement.addEventListener('dragenter', () => {
    styledElement.classList.add(`${ghostClass}-hover`)
    styledElement.style.borderColor = '#bababa'
    styledElement.style.backgroundColor = '#f3f3f3'
  })
  styledElement.addEventListener('dragleave', () => {
    styledElement.classList.remove(`${ghostClass}-hover`)
    styledElement.style.borderColor = '#b3bac5'
    styledElement.style.backgroundColor = 'transparent'
  })

  return ghost
}

function closest(node, classToFind) {
  if (!node.classList) {
    return null
  }
  if (node.classList.contains(classToFind)) {
    return node
  }
  if (!node.parentNode) {
    return null
  }
  return closest(node.parentNode, classToFind)
}

export default Vue.extend({
  name: 'KitDraggable',
  props: {
    enabled: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    },
    draggableClass: {
      type: String
    },
    handleSelector: {
      type: String,
      default: ''
    }
  },
  mounted() {
    if (this.enabled) {
      setTimeout(() => {
        this.setupDrag()
      }, 500)
    }
  },
  beforeDestroy() {
    this.removeMouseDown()
  },
  data() {
    return {
      itemsList: [],
      items: [],
      ghostElement: null,
      timerToRemoveGhost: null
    }
  },
  methods: {
    async setupDrag() {
      if (!this.list.length) {
        throw new Error('KitDraggable only works with a list of items')
      }
      if (!this.draggableClass || !this.draggableClass.length) {
        throw new Error('KitDraggable only works with a class to find draggable items')
      }
      await this.$nextTick()
      const parent = this.$parent.$el
      const draggableItems = parent.querySelectorAll(`.${this.draggableClass}`)
      if (!draggableItems || draggableItems.length !== this.list.length) {
        throw new Error(
          `KitDraggable: draggableItems count should be the same as the list length ${draggableItems.length} vs ${this.list.length}`
        )
      }

      for (const draggableItem of draggableItems) {
        let handle = draggableItem
        if (this.handleSelector) {
          handle = draggableItem.querySelector(this.handleSelector)
          if (!handle) {
            throw new Error(`No handle found (${this.handleSelector})`)
          }
        }

        handle.addEventListener('mousedown', this.onMouseDown)

        this.itemsList.push(draggableItem)
      }
      draggableItems.item(draggableItems.length - 1)

      const ghostElement = ghostFactory(this.itemsList[0])
      ghostElement.addEventListener('drop', this.onDrop)

      this.ghostElement = ghostElement
    },
    teardown() {
      const parent = this.$parent.$el
      this.itemsList = []
      const draggableItems = parent.querySelectorAll(`.${this.draggableClass}`)

      for (const draggableItem of draggableItems) {
        draggableItem.draggable = false
        draggableItem.removeEventListener('dragstart', this.onDragStart)
        draggableItem.removeEventListener('dragover', this.onDragOver)
        draggableItem.removeEventListener('dragend', this.onDragEnd)
      }
    },
    onMouseDown() {
      this.itemsList.forEach(item => {
        item.draggable = true
        item.addEventListener('dragstart', this.onDragStart)
        item.addEventListener('dragover', this.onDragOver)
        item.addEventListener('dragend', this.onDragEnd)
      })
    },
    removeMouseDown() {
      this.itemsList.forEach(item => {
        let handle = item
        if (this.handleSelector) {
          handle = item.querySelector(this.handleSelector)
          if (!handle) {
            throw new Error(`No handle found (${this.handleSelector})`)
          }
        }

        handle.removeEventListener('mousedown', this.onMouseDown)
      })
    },
    onDragStart(event) {
      if (!this.itemsList.includes(event.target)) {
        return
      }
      event.dataTransfer.setData("text/plain", this.itemsList.indexOf(event.target))
    },
    onDragOver(event) {
      const target = closest(event.target, this.draggableClass)
      const parent = target.parentNode
      const draggedElementIndex = Number(event.dataTransfer.getData('text/plain'))


      if (!target || !this.itemsList.includes(target)) {
        try {
          parent.removeChild(this.ghostElement)
        } catch (e) {
          // ignore
        }
        return
      }
      clearTimeout(this.timerToRemoveGhost)

      const siblings = Array.from(parent.childNodes)
      const indexInItems = this.itemsList.indexOf(target)

      const indexInSiblings = siblings.indexOf(target)
      if (indexInItems === draggedElementIndex) {
        try {
          parent.removeChild(this.ghostElement)
        } catch (e) {
          // ignore
        }
      } else if (indexInItems < draggedElementIndex) {
        // add on left of element
        parent.insertBefore(this.ghostElement, target)
      } else {
        // add on right of element
        if (indexInSiblings === siblings.length - 1) {
          parent.append(this.ghostElement)
        } else {
          parent.insertBefore(this.ghostElement, siblings[indexInSiblings + 1])
        }
      }
    },
    onDragEnd() {
      this.timerToRemoveGhost = setTimeout(() => {
        try {
          this.teardown()
          this.ghostElement.parentNode.removeChild(this.ghostElement)
        } catch (e) {
          // ignore
        }
      }, 50)
    },
    onDrop(event) {
      const draggedElementIndex = Number(event.dataTransfer.getData('text/plain'))

      // visually do the thing
      const parent = this.ghostElement.parentNode
      this.ghostElement.parentNode.replaceChild(this.itemsList[draggedElementIndex], this.ghostElement)

      const newOrder = Array.from(parent.childNodes)
        .map((node) => {
          const index = this.itemsList.indexOf(node)
          return this.list[index]
        })
        // as the parent might contain also none draggable items.
        .filter(item => typeof item !== 'undefined')

      this.teardown()

      this.$emit('reorder', newOrder)
    }
  },
  watch: {
    list() {
      this.teardown()
      if (this.enabled) {
        this.setupDrag()
      }
    },
    enabled() {
      this.teardown()
      if (this.enabled) {
        this.setupDrag()
      }
    }
  },
  render() {
    return this.$slots.default[0]
  }
})
