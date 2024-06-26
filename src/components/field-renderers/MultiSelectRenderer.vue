<template>
  <div ref="overflowContainer" class="multiselect overflow-container">
    <span v-for="(value, i) in visibleValues" :key="i" ref="tag" class="tag" :title="value">
      {{ value }}
    </span>
    <KitButton v-if="hiddenValues.length > 0" ref="target" spacing="none" :is-selected="isOpen" @click="toggleDropdown">
      +{{ hiddenValues.length }}
    </KitButton>
    <Popper v-if="isOpen" ref="popper" :target-element="$refs.target.$el" offset="0,5" placement="bottom-end">
      <div ref="dropdown" class="dropdown-list">
        <div v-for="(value, i) in hiddenValues" :key="i" class="item" :title="value">
          {{ value }}
        </div>
      </div>
    </Popper>
  </div>
</template>

<script>
import pDebounce from 'p-debounce'
import Popper from '../Popper/Popper'
import KitButton from '../Button/KitButton.vue'

export default {
  name: 'KitMultiSelectRenderer',
  components: { Popper, KitButton },
  props: {
    selectedValues: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isOpen: false,
      visibleCount: this.selectedValues.length
    }
  },
  computed: {
    visibleValues() {
      return this.selectedValues.slice(0, this.visibleCount)
    },
    hiddenValues() {
      return this.selectedValues.slice(this.visibleCount)
    }
  },
  created() {
    this.onResize = pDebounce(this.handleResize, 100)
    this.breakPoints = []
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.checkOverflow()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  updated() {
    this.checkOverflow()
  },
  methods: {
    handleResize() {
      this.checkOverflow()
    },
    checkOverflow() {
      const { overflowContainer } = this.$refs
      const hasOverflow = overflowContainer.scrollWidth > overflowContainer.clientWidth
      if (hasOverflow) {
        this.breakPoints[this.visibleCount] = overflowContainer.clientWidth
        this.visibleCount -= 1
      }
      while (
        overflowContainer.clientWidth > this.breakPoints[this.visibleCount + 1] &&
        this.visibleCount < this.selectedValues.length
      ) {
        this.visibleCount += 1
      }
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.multiselect {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}

.tag {
  display: block;
  font-size: 14px;
  font-weight: normal;
  flex-shrink: 0;
  vertical-align: middle;
  margin-left: 4px;
  margin-right: 4px;
  max-width: 180px;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 4px;
  overflow: hidden;
  background-color: rgba(9, 30, 66, 0.08);
  color: rgb(37, 56, 88);
  cursor: default;
  height: 20px;
  border-radius: 3px;
}

.multiselect > .tag:first-child {
  margin-left: 0;
}

.multiselect > .tag:last-child,
.ellipsis {
  margin-right: 0;
}

.ellipsis {
  background-color: rgba(9, 30, 66, 0.08);
}

.ellipsis:hover {
  background-color: rgba(9, 30, 66, 0.04);
  cursor: pointer;
}

.dropdown-list {
  position: absolute;
  z-index: 1;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
  box-sizing: border-box;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  padding: 4px 0px;
}

.item {
  padding: 6px 12px 6px;
}
</style>
