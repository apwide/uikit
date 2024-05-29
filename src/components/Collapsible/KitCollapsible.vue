<template>
  <div class="kit-collapsible">
    <slot :isCollapsed="isCollapsed" :toggle="toggle" name="trigger">
      <div style="margin-left: -4px">
        <KitButton
          appearance="subtle"
          class="kit-collapsible-trigger"
          spacing="none"
          style="font-size: 1rem"
          @click="toggle">
          <template #icon-before>
            <span style="width: 20px">
              <KitIcon v-if="isCollapsed" type="angle-right" />
              <KitIcon v-else type="angle-down" />
            </span>
          </template>
          {{ label }}
        </KitButton>
      </div>
    </slot>
    <div
      v-if="!isCollapsed"
      ref="contentRef"
      :style="{ maxHeight: maxHeight, overflow: overflow }"
      class="kit-collapsible-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeMount, onMounted, ref } from 'vue'
import KitButton from '../Button/Button.vue'
import KitIcon from '../Icon/KitIcon.vue'

type Props = {
  label: string
  collapsed: boolean
  storeState?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  collapsed: true
})

const key = computed(() => `KitCollapsible ${props.label}`.replaceAll(/[\W]/g, '_'))
const maxHeight = ref('')
const overflow = ref('')
const contentRef = ref<HTMLDivElement>()
const storedCollapsed = ref<boolean | null>(null)
const isCollapsed = computed(() => (storedCollapsed.value !== null ? storedCollapsed.value : props.collapsed))
const timeout = ref()

function calculateMaxHeight(isCollapsed) {
  if (contentRef.value) {
    return isCollapsed ? '0px' : `${contentRef.value.scrollHeight}px`
  }
  return isCollapsed ? '0px' : 'fit-content'
}

async function toggle() {
  clearTimeout(timeout.value)
  storedCollapsed.value = !isCollapsed.value
  overflow.value = storedCollapsed.value ? 'initial' : 'hidden'
  await nextTick()
  writeToSession()
  timeout.value = setTimeout(() => {
    if (!isCollapsed.value) {
      overflow.value = 'initial'
      maxHeight.value = 'fit-content'
    }
  }, 50 + 400)
  setTimeout(() => {
    maxHeight.value = calculateMaxHeight(isCollapsed.value)
  }, 50)
}

function readFromSession() {
  if (!props.storeState) {
    return null
  }
  try {
    const storedValues = sessionStorage.getItem(key.value)
    if (storedValues) {
      return storedValues === 'collapsed'
    }
    return null
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('uikit::KitCollapsible', e)
    return null
  }
}

function writeToSession() {
  if (!props.storeState) {
    return
  }
  try {
    sessionStorage.setItem(key.value, isCollapsed.value ? 'collapsed' : 'expanded')
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('uikit::KitCollapsible', e)
  }
}

onBeforeMount(() => {
  storedCollapsed.value = readFromSession()
})
onMounted(() => {
  maxHeight.value = calculateMaxHeight(isCollapsed.value)
})
</script>
<style scoped>
.kit-collapsible {
  margin: 8px 0;
}

.kit-collapsible-content {
  transition: max-height 0.4s ease-in;
  margin-top: 10px;
  margin-left: 20px;
}

.kit-collapsible-trigger {
  font-weight: 700;
}
</style>
