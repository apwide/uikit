<template>
  <KitCheckbox class="kit-dropdown-checkbox-item" :checked="checked" :value="value" @input="onInput">
    <span class="label-text">
      <slot />
    </span>
    <KitButton
      v-if="isMulti && showOnlyButton"
      class="only-button"
      appearance="subtle"
      spacing="none"
      @click="onOnlyClicked">
      only
    </KitButton>
  </KitCheckbox>
</template>

<script>
/**
 * Cannot be moved to vue 2 setup as requires defineModel.
 * It declares v-model to be bound to checked prop.
 */
import KitCheckbox from '../Checkbox/KitCheckbox.vue'
import KitButton from '../Button/KitButton.vue'

export default {
  components: { KitCheckbox, KitButton },
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    checked: {
      type: [Boolean, Array],
      required: true
    },
    value: {
      type: String,
      default: undefined
    },
    showOnlyButton: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isMulti() {
      return Array.isArray(this.checked) && this.value
    }
  },
  methods: {
    onInput(value) {
      this.$emit('input', value)
    },
    onOnlyClicked() {
      this.$emit('input', [this.value])
    }
  }
}
</script>

<style scoped>
.kit-dropdown-checkbox-item {
  --kit-dropdown-checkbox-bg: rgb(255, 255, 255);
  --kit-dropdown-checkbox-text: rgb(23, 43, 77);
  --kit-dropdown-checkbox-hover-bg: rgb(244, 245, 247);
  --kit-dropdown-checkbox-hover-text: rgb(23, 43, 77);
}

[data-color-mode="dark"] .kit-dropdown-checkbox-item {
  --kit-dropdown-checkbox-bg: #282e33;
  --kit-dropdown-checkbox-text: var(--kit-body-text);
  --kit-dropdown-checkbox-hover-bg: rgba(161, 189, 217, 0.08);
  --kit-dropdown-checkbox-hover-text: var(--kit-body-text);
}

.kit-dropdown-checkbox-item {
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  background-color: var(--kit-dropdown-checkbox-bg);
  color: var(--kit-dropdown-checkbox-text);
  text-decoration: none;
  padding: 5px 12px 6px 7px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 40px;
}

.kit-dropdown-checkbox-item.checkbox-wrapper {
  display: flex;
}

.kit-dropdown-checkbox-item:hover {
  background-color: var(--kit-dropdown-checkbox-hover-bg);
  color: var(--kit-dropdown-checkbox-hover-text);
  fill: var(--kit-dropdown-checkbox-hover-bg);
  text-decoration: none;
}

.kit-dropdown-checkbox-item >>> .label {
  overflow: hidden;
  display: flex;
  width: 100%;
}

.kit-dropdown-checkbox-item .label-text {
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

.kit-dropdown-checkbox-item .only-button {
  margin-left: auto;
  display: none;
}

.kit-dropdown-checkbox-item:hover .only-button {
  display: block;
}
</style>
