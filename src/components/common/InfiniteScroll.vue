<template>
  <component :is="tag" ref="infiniteScrollLoader" class="infinite-scroll-loader">
    <KitSpinner size="small" />
  </component>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import KitSpinner from '../Spinner/KitSpinner.vue'

type Props = {
  tag?: string
}

withDefaults(defineProps<Props>(), {
  tag: 'td'
})

const emit = defineEmits<{
  (event: 'table-bottom-reached', data: () => void)
}>()

const infiniteScrollLoader = ref<Element>()
const observer = ref<IntersectionObserver>()

onMounted(() => {
  observer.value = new IntersectionObserver(([entries]) => {
    if (entries.isIntersecting) {
      tableBottomReached()
    }
  })
  observe()
})

onBeforeUnmount(() => {
  observer.value.disconnect()
})

function observe() {
  if (!infiniteScrollLoader.value) {
    return
  }
  observer.value.disconnect()
  observer.value.observe(infiniteScrollLoader.value)
}

function tableBottomReached() {
  emit('table-bottom-reached', () => observe())
}
</script>

<style scoped>
.infinite-scroll-loader {
  box-sizing: border-box;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 5px;
}
</style>
