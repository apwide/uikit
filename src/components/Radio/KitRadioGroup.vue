<template>
  <div class="kit-radio-group">
    <KitRadio
      v-for="v in availableValues"
      :key="v.key"
      :checked="currentKey === v.key"
      :name="name"
      :value="v"
      @input="currentKey = $event" />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import KitRadio from './KitRadio'

type Normalizer<TYPE> = (v: TYPE) => { key: string, label: string, value: unknown }

type Props = {
  value?: unknown
  values?: Array
  normalizer?: Normalizer
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  values: () => [],
  normalizer: (str) => ({ key: str, label: str, value: str })
})

const emit = defineEmits<{
  (event: 'input', data?: unknown)
}>()

const name = computed(() => {
  return `kit-d-${Date.now()}`
})

const availableValues = computed(() => {
  return props.values.map((v) => props.normalizer(v))
})

const currentKey = computed({
  get() {
    return props.normalizer(props.value).key
  },
  set(newValue) {
    emit('input', newValue.value)
  }
})

</script>
<style scoped>
.kit-radio-group {
  display: flex;
  flex-direction: column;
}
</style>
