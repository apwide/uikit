import Vue from 'vue'
import { closest } from '@/utils/dom'

function droptargetOnDragOver(event) {
  event.dataTransfer.dropEffect = 'move'
  event.preventDefault()
}

function ghostFactory(item: HTMLElement) {
  const tag = item.tagName.toLowerCase()
  const box = item.getBoundingClientRect()
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
  ghost.classList.add(`${ghostClass}-container`)
  styledElement.classList.add(ghostClass)

  const style = `
    min-width: 20px;
    min-height: ${box.height * 0.95}px;
    border-style: dashed;
    border-color: #b3bac5;
    border-width: 2px;
    padding: 2px;
    content: ' ';
    `

  styledElement.setAttribute('style', style)

  ghost.addEventListener('dragenter', (event) => event.preventDefault())
  ghost.addEventListener('dragover', droptargetOnDragOver)

  return ghost
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
    if (this.enabled && this.list.length) {
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
      ghostElement: null,
      timerToRemoveGhost: null,
      // needed for Chrome
      draggedElementIndex: null
    }
  },
  methods: {
    itemList() {
      const parent = this.$parent.$el
      return Array.from(parent.querySelectorAll(`.${this.draggableClass}`))
    },
    async setupDrag() {
      if (!this.enabled) {
        return
      }
      if (!this.list.length) {
        // eslint-disable-next-line no-console
        console.error('KitDraggable only works with a list of items')
        return
      }
      if (!this.draggableClass || !this.draggableClass.length) {
        // eslint-disable-next-line no-console
        console.error('KitDraggable only works with a class to find draggable items')
        return
      }

      let draggableItems = []
      let hasItems = false
      let hasTheRightAmountOfItems = false
      const start = Date.now()
      const waitTime = 10_000 // ms
      while (!hasItems || !hasTheRightAmountOfItems) {
        const now = Date.now()
        if (now - start > waitTime) {
          // let's abandon
          throw new Error(
            `KitDraggable: draggableItems count should be the same as the list length ${draggableItems.length} vs ${this.list.length}`
          )
        }
        await this.$nextTick()
        draggableItems = this.itemList()
        hasItems = draggableItems.length > 0
        hasTheRightAmountOfItems = draggableItems.length === this.list.length
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
      }
    },
    teardown() {
      const draggableItems = this.itemList()

      try {
        draggableItems[this.draggedElementIndex].style.opacity = '1'
      } catch (e) {
        // we don't care
      }

      for (const draggableItem of draggableItems) {
        draggableItem.draggable = false
        draggableItem.removeEventListener('dragstart', this.onDragStart)
        draggableItem.removeEventListener('dragenter', this.onDragEnter)
        draggableItem.removeEventListener('dragover', droptargetOnDragOver)
        draggableItem.removeEventListener('dragover', this.cancelGhostRemoval)
        draggableItem.removeEventListener('dragleave', this.planRemoveToRemoveGhost)
        draggableItem.removeEventListener('dragend', this.onDragEnd)
      }
    },
    // Start the drag-n-drop
    onMouseDown() {
      for (const draggableItem of this.itemList()) {
        draggableItem.draggable = true
        // Event triggered when an element starts to be dragged by the user
        draggableItem.addEventListener('dragstart', this.onDragStart)
        // Event triggered when an element enters a valid drop target
        draggableItem.addEventListener('dragenter', this.onDragEnter)
        draggableItem.addEventListener('dragover', this.cancelGhostRemoval)
        // Needed to become a drop target
        draggableItem.addEventListener('dragover', droptargetOnDragOver)
        // Needed to be able to "cancel" drag-n-drop by dragging away from any target
        draggableItem.addEventListener('dragleave', this.planRemoveToRemoveGhost)
        draggableItem.addEventListener('dragend', this.onDragEnd)
      }
    },
    removeMouseDown() {
      if (!this.enabled) {
        return
      }
      this.itemList().forEach((item) => {
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
    preventDefault(event: DragEvent) {
      event.preventDefault()
    },
    // happens on dragged element
    onDragStart(event: DragEvent) {
      const items = this.itemList()
      if (!items.includes(event.target)) {
        return
      }

      // Remove text that has been selected on screen
      try {
        const selection = window.getSelection()
        selection.removeAllRanges()
      } catch (e) {
        // We probably don't care
      }

      const draggedItem = event.target as HTMLElement
      const ghostElement = ghostFactory(draggedItem)

      draggedItem.style.opacity = '0.5'

      event.dataTransfer.dropEffect = 'move'
      this.draggedElementIndex = items.indexOf(draggedItem)

      ghostElement.removeEventListener('dragenter', this.cancelGhostRemoval)
      ghostElement.removeEventListener('dragover', this.cancelGhostRemoval)
      ghostElement.removeEventListener('dragleave', this.planRemoveToRemoveGhost)
      ghostElement.removeEventListener('drop', this.onDrop)
      ghostElement.addEventListener('dragenter', this.cancelGhostRemoval)
      ghostElement.addEventListener('dragover', this.cancelGhostRemoval)
      ghostElement.addEventListener('dragleave', this.planRemoveToRemoveGhost)
      ghostElement.addEventListener('drop', this.onDrop)

      this.ghostElement = ghostElement
    },
    onDragEnter(event: DragEvent) {
      const target = closest(event.target as HTMLElement, this.draggableClass)
      const parent = target.parentElement
      const items = this.itemList()

      if (!target || !items.includes(target)) {
        try {
          parent.removeChild(this.ghostElement)
        } catch (e) {
          // ignore
        }
        return
      }
      event.preventDefault()
      this.cancelGhostRemoval()

      const siblings = Array.from(parent.childNodes)
      const indexInItems = items.indexOf(target)

      const indexInSiblings = siblings.indexOf(target)
      if (indexInItems === this.draggedElementIndex) {
        try {
          parent.removeChild(this.ghostElement)
        } catch (e) {
          // ignore
        }
      } else if (indexInItems < this.draggedElementIndex) {
        // add before element
        parent.insertBefore(this.ghostElement, target)
      } else {
        // add after element
        if (indexInSiblings === siblings.length - 1) {
          parent.append(this.ghostElement)
        } else {
          parent.insertBefore(this.ghostElement, siblings[indexInSiblings + 1])
        }
      }

      if (siblings.indexOf(target) !== this.draggedElementIndex) {
        target.addEventListener('drop', this.onDrop)
      }
    },
    onDragEnd() {
      this.teardown()
    },
    onDrop(event: DragEvent) {
      event.preventDefault()
      const draggableItems = this.itemList()
      // visually do the thing
      const parent = this.ghostElement.parentNode
      draggableItems[this.draggedElementIndex].style.opacity = '1'

      this.ghostElement.parentNode.replaceChild(draggableItems[this.draggedElementIndex], this.ghostElement)

      const newOrder = Array.from(parent.childNodes)
        .map((node) => {
          const index = draggableItems.indexOf(node)
          return this.list[index]
        })
        // as the parent might contain also none draggable items.
        .filter((item) => typeof item !== 'undefined')

      event.preventDefault()

      this.teardown()

      this.$emit('reorder', newOrder)
    },
    planRemoveToRemoveGhost() {
      this.timerToRemoveGhost = setTimeout(() => {
        try {
          this.ghostElement.parentNode.removeChild(this.ghostElement)
        } catch (e) {
          // ignore
        }
      }, 250)
    },
    cancelGhostRemoval() {
      clearTimeout(this.timerToRemoveGhost)
    }
  },
  watch: {
    list() {
      this.teardown()
      if (this.enabled && this.list.length) {
        this.setupDrag()
      }
    },
    enabled() {
      this.teardown()
      if (this.enabled && this.list.length) {
        this.setupDrag()
      }
    }
  },
  render() {
    if (this.$slots.default.length > 1) {
      throw new Error(
        `KitDraggable: There should be only one item inside the KitDraggable component, currently there are ${this.$slots.default.length}.`
      )
    }
    return this.$slots.default[0]
  }
})
