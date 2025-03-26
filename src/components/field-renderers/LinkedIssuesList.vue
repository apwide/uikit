<template>
  <ul>
    <li v-for="issue in issues" :key="issue.id">
      <IssueRenderer :issue="issue" :base-url="baseUrl" :appearance="appearance" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Issue } from '@components/field-renderers/types'
import IssueRenderer from './IssueRenderer'

type Props = {
  issues?: Issue[]
  baseUrl?: string
  appearance?: 'normal' | 'compact' | 'micro'
}

withDefaults(defineProps<Props>(), {
  issues: () => [],
  baseUrl: '',
  appearance: 'normal'
})
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
</style>
