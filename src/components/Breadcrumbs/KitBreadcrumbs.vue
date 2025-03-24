<template>
  <div ref="me" class="kit-wrapper">
    <div class="kit-breadcrumbs">
      <slot>
        <KitBreadcrumbItem v-for="item in items" :key="item.text" :link="item.link" :text="item.text" />
      </slot>
    </div>

    <KitCopyToClipboard
      v-if="copy"
      :text="lastItemLink"
      placement="top-start"
      style="color: var(--kit-header-text)"
      label="Copy link to clipboard">
      <template #default="{ copied }">
        <KitIcon class="kit-copy-icon" size="sm" v-if="!copied" type="link" />
        <KitIcon class="kit-copy-icon" size="sm" v-else type="check" />
      </template>
    </KitCopyToClipboard>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import KitCopyToClipboard from '../CopyToClipboard/KitCopyToClipboard.vue'
import KitIcon from '../Icon/KitIcon'
import KitBreadcrumbItem from './KitBreadcrumbItem.vue'

type Item = {
  text: string
  link: string
}

type Props = {
  items?: Item[]
  copy?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  copy: false
})

const me = ref<HTMLDivElement>()
const lastItemLink = ref<string | undefined>()

watch(() => props.copy, newCopyValue => {
  if (newCopyValue) {
    nextTick(() => {
      const links = me.value.querySelectorAll('a')
      if (links.length) {
        lastItemLink.value = links[links.length - 1].href
      }
    })
  }
}, {
  immediate: true
})
</script>

<style scoped>
.kit-wrapper {
  display: flex;
  align-items: center;
}

.kit-breadcrumbs {
  color: var(--kit-header-text);
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  line-height: 24px;
  font-size: 14px;
}

.kit-copy-icon {
  opacity: 0;
  cursor: pointer;
  transform: translate(-6px, 1px);
  transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
}

.kit-wrapper:hover .kit-copy-icon {
  opacity: 1;
  transform: scale(0.8) translate(8px, 1px);
}
</style>
