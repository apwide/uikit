<template>
  <div class="kit-bordered-panel-row">
    <div class="kit-bordered-panel-row__key" @mouseenter="showAfterLabel = true" @mouseleave="showAfterLabel = false">
      <slot name="label">
        <span class="kit-bordered-panel-row__default-label">{{ label }}</span>
      </slot>
      <span v-show="forceShowAfter || showAfterLabel">
        <slot name="after-label" />
      </span>
    </div>
    <div class="kit-bordered-panel-row__value">
      <slot>{{ value }}</slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    label: {
      type: String
    },
    value: {
      type: String
    },
    forceShowAfter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showAfterLabel: false
    }
  }
})
</script>

<style scoped>
.kit-bordered-panel-row {
  margin-top: 0;
  margin-bottom: 16px;
  display: flex;
  align-items: first baseline;
}

.kit-bordered-panel-row__key {
  color: #42526e;
  min-width: 120px;
  width: 40%;
  max-width: 170px;
  display: flex;
  align-items: first baseline;
  padding-right: 18px;
}

.kit-bordered-panel-row__default-label {
  margin-right: 5px;
  font-weight: 500;
  letter-spacing: -0.24px;
}

.kit-bordered-panel-row__value {
  width: 60%;
}
</style>
