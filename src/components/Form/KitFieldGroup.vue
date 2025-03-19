<template>
  <div class="kit-field-group">
    <div class="top">
      <span class="kit-field-group__label">{{ label }}</span
      ><slot name="after" />
    </div>
    <slot />
    <div v-for="error in errors" ref="error" :key="error" class="kit-field-group__error-message">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">

type Props = {
  label?: string
  errors?: Array
}

defineProps<Props>()
</script>

<style scoped>
.kit-field-group__error-message {
  font-size: 12px;
  font-style: inherit;
  line-height: 18px;
  font-weight: normal;
  color: #de350b;
  margin-top: 4px;
  display: flex;
  align-items: center;
}

.kit-field-group__label {
  display: inline-flex;
  color: #6b778c;
  font-size: 12px;
  line-height: 1.33333;
  font-weight: 600;
  padding: 16px 3px 4px 2px;
}

[required] .kit-field-group__label::after {
  color: #de350b;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 600;
  padding-left: 2px;
  display: inline-block;
  content: '*';
}
</style>
