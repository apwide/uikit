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
  ghost.addEventListener('dragover', (event) => event.preventDefault())

  // make it sexy for the eye when hovering the dropzone
  styledElement.addEventListener('dragenter', () => {
    styledElement.classList.add(`${ghostClass}-hover`)
    styledElement.style.borderColor = '#bababa'
    // styledElement.style.borderWidth = '3px'
    // styledElement.style.padding = '1px'
    styledElement.style.backgroundColor = '#f3f3f3'
  })
  styledElement.addEventListener('dragleave', () => {
    styledElement.classList.remove(`${ghostClass}-hover`)
    // styledElement.style.borderWidth = '2px'
    // styledElement.style.padding = '2px'
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
    }
  },
  mounted() {
    if (this.enabled) {
      this.setupDrag()
    }
  },

  data() {
    return {
      itemsList: [],
      items: [],
      ghostElement: null,
      draggedElementIndex: -1,
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
      if (draggableItems.length !== this.list.length) {
        throw new Error(
          `KitDraggable: draggableItems count should be the same as the list length ${draggableItems.length} vs ${this.list.length}`
        )
      }

      for (const draggableItem of draggableItems) {
        draggableItem.draggable = true
        draggableItem.addEventListener('dragstart', this.onDragStart)
        draggableItem.addEventListener('dragover', this.onDragOver)
        draggableItem.addEventListener('dragend', this.onDragEnd)
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
    onDragStart(event) {
      if (!this.itemsList.includes(event.target)) {
        return
      }
      this.draggedElementIndex = this.itemsList.indexOf(event.target)
    },
    onDragOver(event) {
      const target = closest(event.target, this.draggableClass)

      if (!target || !this.itemsList.includes(target)) {
        return
      }
      clearTimeout(this.timerToRemoveGhost)

      const parent = target.parentNode
      const index = this.itemsList.indexOf(target)

      if (index === this.draggedElementIndex) {
        try {
          parent.removeChild(this.ghostElement)
        } catch (e) {
          // ignore
        }
      } else if (index < this.draggedElementIndex) {
        parent.insertBefore(this.ghostElement, target)
      } else {
        if (index === this.itemsList.length - 1) {
          parent.append(this.ghostElement)
        } else {
          parent.insertBefore(this.ghostElement, this.itemsList[index + 1])
        }
      }
    },
    onDragEnd() {
      this.timerToRemoveGhost = setTimeout(() => {
        this.draggedElementIndex = null
        try {
          this.ghostElement.parentNode.removeChild(this.ghostElement)
        } catch (e) {
          // ignore
        }
      }, 50)
    },
    onDrop() {
      // visually do the thing
      const parent = this.ghostElement.parentNode
      this.ghostElement.parentNode.replaceChild(this.itemsList[this.draggedElementIndex], this.ghostElement)

      const newOrder = Array.from(parent.childNodes).map((node) => {
        const index = this.itemsList.indexOf(node)
        return this.list[index]
      })

      this.draggedElementIndex = null

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
