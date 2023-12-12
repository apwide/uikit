import { defineComponent, getCurrentInstance, nextTick, onMounted, onUnmounted, PropType, ref, watch } from 'vue'
import { closest } from '@/utils/dom'

function droptargetOnDragOver(event) {
  event.dataTransfer.dropEffect = 'move'
  event.preventDefault()
}

export default defineComponent({
  props: {
    enabled: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array as PropType<unknown[]>,
      default: () => []
    },
    handleSelector: String,
    draggableClass: String
  },
  emits: {
    reorder(payload: unknown[]) {
      return payload.length > 0
    }
  },
  setup(props, { slots, emit }) {
    const instance = getCurrentInstance()

    const ghostElement = ref<HTMLElement>()
    // needed for Chrome
    const draggedElementIndex = ref<number>()
    const timerToRemoveGhost = ref()

    function itemList(): HTMLElement[] {
      const parent = instance.proxy.$parent.$el
      return Array.from(parent.querySelectorAll(`.${props.draggableClass}`)) as HTMLElement[]
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
      ghost.addEventListener('dragover', cancelGhostRemoval)
      ghost.addEventListener('dragover', droptargetOnDragOver)

      return ghost
    }

    function teardown() {
      const draggableItems = itemList()

      try {
        draggableItems[draggedElementIndex.value].style.opacity = '1'
      } catch (e) {
        // we don't care
      }

      for (const draggableItem of draggableItems) {
        draggableItem.draggable = false
        draggableItem.removeEventListener('dragstart', onDragStart)
        draggableItem.removeEventListener('dragenter', onDragEnter)
        draggableItem.removeEventListener('dragover', droptargetOnDragOver)
        draggableItem.removeEventListener('dragover', cancelGhostRemoval)
        draggableItem.removeEventListener('dragleave', planRemoveToRemoveGhost)
        draggableItem.removeEventListener('dragend', onDragEnd)
      }
    }

    // happens on dragged element
    function onDragStart(event: DragEvent) {
      const items = itemList()
      if (!items.includes(event.target as HTMLElement)) {
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
      const element = ghostFactory(draggedItem)

      draggedItem.style.opacity = '0.5'

      event.dataTransfer.dropEffect = 'move'
      draggedElementIndex.value = items.indexOf(draggedItem)

      element.removeEventListener('dragenter', cancelGhostRemoval)
      element.removeEventListener('dragover', cancelGhostRemoval)
      element.removeEventListener('dragleave', planRemoveToRemoveGhost)
      element.removeEventListener('drop', onDrop)
      element.addEventListener('dragenter', cancelGhostRemoval)
      element.addEventListener('dragover', cancelGhostRemoval)
      element.addEventListener('dragleave', planRemoveToRemoveGhost)
      element.addEventListener('drop', onDrop)

      ghostElement.value = element
    }

    function onDragEnter(event: DragEvent) {
      const target = closest(event.target as HTMLElement, props.draggableClass)
      const parent = target.parentElement
      const items = itemList()

      if (!target || !items.includes(target)) {
        try {
          parent.removeChild(ghostElement.value)
        } catch (e) {
          // ignore
        }
        return
      }
      event.preventDefault()
      cancelGhostRemoval()

      const siblings = Array.from(parent.childNodes)
      const indexInItems = items.indexOf(target)

      const indexInSiblings = siblings.indexOf(target)

      const draggedElement = items[draggedElementIndex.value] as HTMLElement
      draggedElement.style.opacity = '0.5'
      if (indexInItems === draggedElementIndex.value) {
        try {
          target.style.opacity = '1'
          parent.removeChild(ghostElement.value)
        } catch (e) {
          // ignore
        }
      } else if (indexInItems < draggedElementIndex.value) {
        // add before element
        parent.insertBefore(ghostElement.value, target)
      } else {
        // add after element
        if (indexInSiblings === siblings.length - 1) {
          parent.append(ghostElement.value)
        } else {
          parent.insertBefore(ghostElement.value, siblings[indexInSiblings + 1])
        }
      }

      if (siblings.indexOf(target) !== draggedElementIndex.value) {
        target.addEventListener('drop', onDrop)
      }
    }

    function onDragEnd() {
      teardown()
    }

    function onDrop(event: DragEvent) {
      if (typeof draggedElementIndex.value !== 'number' || !ghostElement.value) {
        return
      }

      event.preventDefault()
      const draggableItems = itemList()
      // visually do the thing
      const parent = ghostElement.value.parentNode
      draggableItems[draggedElementIndex.value].style.opacity = '1'

      ghostElement.value.parentNode.replaceChild(draggableItems[draggedElementIndex.value], ghostElement.value)

      const newOrder = Array.from(parent.childNodes)
        .map((node) => {
          const index = draggableItems.indexOf(node as HTMLElement)
          return props.list[index]
        })
        // as the parent might contain also none draggable items.
        .filter((item) => typeof item !== 'undefined')

      teardown()

      emit('reorder', newOrder)
    }

    function planRemoveToRemoveGhost() {
      timerToRemoveGhost.value = setTimeout(() => {
        try {
          ghostElement.value.parentNode.removeChild(ghostElement.value)
        } catch (e) {
          // ignore
        }
      }, 250)
    }

    function cancelGhostRemoval() {
      clearTimeout(timerToRemoveGhost.value)
    }

    // Start the drag-n-drop
    function onMouseDown() {
      for (const draggableItem of itemList()) {
        draggableItem.draggable = true
        // Event triggered when an element starts to be dragged by the user
        draggableItem.addEventListener('dragstart', onDragStart)
        // Event triggered when an element enters a valid drop target
        draggableItem.addEventListener('dragenter', onDragEnter)
        draggableItem.addEventListener('dragover', cancelGhostRemoval)
        // Needed to become a drop target
        draggableItem.addEventListener('dragover', droptargetOnDragOver)
        // Needed to be able to "cancel" drag-n-drop by dragging away from any target
        draggableItem.addEventListener('dragleave', planRemoveToRemoveGhost)
        draggableItem.addEventListener('dragend', onDragEnd)
      }
    }

    async function setupDrag() {
      if (!props.enabled) {
        return
      }
      if (!props.list.length) {
        // eslint-disable-next-line no-console
        console.error('KitDraggable only works with a list of items')
        return
      }
      if (!props.draggableClass || !props.draggableClass.length) {
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
            `KitDraggable: draggableItems count should be the same as the list length ${draggableItems.length} vs ${props.list.length}`
          )
        }
        await nextTick()
        draggableItems = itemList()
        hasItems = draggableItems.length > 0
        hasTheRightAmountOfItems = draggableItems.length === props.list.length
      }

      for (const draggableItem of draggableItems) {
        let handle = draggableItem
        if (props.handleSelector) {
          handle = draggableItem.querySelector(props.handleSelector)
          if (!handle) {
            throw new Error(`No handle found (${props.handleSelector})`)
          }
        }

        handle.addEventListener('mousedown', onMouseDown)
      }
    }

    function removeMouseDown() {
      if (!props.enabled) {
        return
      }
      itemList().forEach((item) => {
        let handle = item
        if (props.handleSelector) {
          handle = item.querySelector(props.handleSelector)
          if (!handle) {
            throw new Error(`No handle found (${props.handleSelector})`)
          }
        }

        handle.removeEventListener('mousedown', onMouseDown)
      })
    }

    onMounted(() => {
      if (props.enabled && props.list.length) {
        setTimeout(() => {
          setupDrag()
        }, 500)
      }
    })

    onUnmounted(() => {
      removeMouseDown()
    })

    function restart() {
      teardown()
      if (props.enabled && props.list.length) {
        setupDrag()
      }
    }

    watch(() => props.list, restart)
    watch(() => props.enabled, restart)

    return () => slots.default()
  }
})
