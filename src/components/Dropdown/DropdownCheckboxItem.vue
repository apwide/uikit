<template>
  <KitCheckbox class="dropdown-checkbox-item" :checked="checked" :value="value" @input="onInput">
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
.dropdown-checkbox-item {
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  color: rgb(23, 43, 77);
  text-decoration: none;
  padding: 5px 12px 6px 7px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 40px;
}

.dropdown-checkbox-item.checkbox-wrapper {
  display: flex;
}

.dropdown-checkbox-item:hover {
  background-color: rgb(244, 245, 247);
  color: rgb(23, 43, 77);
  fill: rgb(244, 245, 247);
  text-decoration: none;
}

.dropdown-checkbox-item >>> .label {
  overflow: hidden;
  display: flex;
  width: 100%;
}

.dropdown-checkbox-item .label-text {
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

.dropdown-checkbox-item .only-button {
  margin-left: auto;
  display: none;
}

.dropdown-checkbox-item:hover .only-button {
  display: block;
}
</style>
