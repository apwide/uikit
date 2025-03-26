<template>
  <div class="type">
    <img class="issue-type-icon" :src="typeIconUrl" :alt="typeName" :title="typeName" />
    <span v-if="compact">{{ value.name }}</span>
  </div>
</template>

<script setup lang="ts">
import type { IssueType } from '@components/field-renderers/types'
import { computed } from 'vue'

type Props = {
  value: IssueType
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  compact: false
})

const typeName = computed(() => props.value?.name)
const typeIconUrl = computed(() => props.value?.iconUrl)
</script>

<style scoped>
.issue-type-icon {
  width: 16px;
  height: 16px;
}

span {
  margin-left: 4px;
}

.type {
  display: inline-flex;
  align-items: center;
}
</style>
