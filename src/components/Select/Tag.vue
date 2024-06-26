<template>
  <div class="tag" draggable="true" @dragstart="onDragStart" @dragend.prevent="onDragEnd" @drag="onDrag">
    <slot>
      <div class="label">
        {{ tag.label }}
      </div>
    </slot>
    <div
      v-if="shouldShowRemoveButton"
      ref="remove"
      class="remove-tag"
      data-cy="remove-tag"
      @mousedown.prevent.stop
      @click.stop="onRemove">
      <EditorCloseIcon primary-color="#000" size="xsmall" />
    </div>
  </div>
</template>

<script>
import EditorCloseIcon from '../Icon/aui/EditorCloseIcon'

export default {
  name: 'KitTag',
  components: { EditorCloseIcon },
  props: {
    tag: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  computed: {
    shouldShowRemoveButton() {
      return this.min !== this.count && !this.tag.disabled
    }
  },
  created() {
    document.addEventListener('dragover', this.onDragOver) // https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  },
  beforeDestroy() {
    document.removeEventListener('dragover', this.onDragOver)
  },
  methods: {
    onDragOver(e) {
      this.$emit('drag', e)
    },
    onRemove() {
      this.$emit('on-remove', this.tag.id)
    },
    onDragStart(e) {
      this.$emit('dragstart', e, this.index)
    },
    onDragEnd(e) {
      this.$emit('dragend', e)
    },
    onDrag(e) {
      this.$emit('drag', e)
    }
  }
}
</script>

<style scoped>
.tag {
  background-color: rgb(223, 225, 230);
  display: inline-flex;
  align-items: center;
  min-width: 0;
  box-sizing: border-box;
  color: rgb(66, 82, 110);
  max-width: 100%;
  border-radius: 2px;
  margin: 4px 2px 0 2px;
  cursor: pointer;
  overflow: hidden;
}

.tag:last-of-type {
  margin-right: 5px;
}

.label {
  color: rgb(51, 51, 51);
  font-size: 85%;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  border-radius: 2px;
  overflow: hidden;
  padding: 2px 6px 2px 6px;
}

.remove-tag {
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 2px;
  padding-right: 2px;
  box-sizing: border-box;
  border-radius: 0px 2px 2px 0px;
}

.remove-tag:hover {
  background-color: #ffbdad;
}
</style>
