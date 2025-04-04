<template>
  <div v-if="issue" class="issue" :resolved="isResolved" :appearance="appearance">
    <IssueTypeRenderer v-if="issueType" class="issue-type" :value="issueType" />
    <div v-else class="issue-type unknown-type">
      <QuestionIcon size="xsmall" />
    </div>
    <a class="issue-key" :href="href" target="_blank">{{ issue.key }}</a>
    <div v-if="appearance !== 'micro'" class="issue-summary" :title="fields.summary">
      {{ fields.summary }}
    </div>
    <template v-if="appearance === 'normal'">
      <IssuePriorityRenderer v-if="priority" :value="priority" />
      <User v-if="assignee" class="issue-assignee" :user="assignee" :avatar-only="true" />
      <IssueStatusRenderer v-if="status" class="issue-status" :value="status" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Issue } from '@components/field-renderers/types'
import QuestionIcon from '../Icon/aui/QuestionIcon'
import IssueStatusRenderer from './IssueStatusRenderer'
import IssuePriorityRenderer from './IssuePriorityRenderer'
import IssueTypeRenderer from './IssueTypeRenderer'
import User from './UserRenderer'

type Props = {
  issue?: Issue
  baseUrl?: string
  appearance?: 'normal' | 'compact' | 'micro'
}

const props = withDefaults(defineProps<Props>(), {
  baseUrl: '',
  appearance: 'normal'
})

fields = computed(() => {
  return props.issue.fields || {}
})
const issueType = computed(() => {
  return fields.value.issuetype
})
const href = computed(() => {
  return `${props.baseUrl}/browse/${props.issue.key}`
})
const status = computed(() => {
  return fields.value.status
})
const isResolved = computed(() => {
  return !!fields.value.resolution
})
const priority = computed(() => {
  return fields.value.priority
})
const assignee = computed(() => {
  const { assignee } = fields.value
  if (!assignee) {
    return undefined
  }
  return {
    name: assignee.displayName,
    avatar: assignee.avatarUrls && assignee.avatarUrls['48x48'],
    username: assignee.name
  }
})
</script>

<style scoped>
.issue {
  display: flex;
  align-items: center;
  height: 24px;
  overflow: hidden;
}

.issue[appearance='micro'] {
  height: 16px;
  font-size: 85%;
}

.issue[appearance='micro'] .issue-type {
  width: 14px;
  height: 14px;
}

.issue-key,
.issue-summary,
.issue-priority-icon,
.issue-assignee,
.issue-status {
  margin-left: 8px;
}

.issue[appearance='micro'] .issue-key {
  margin-left: 6px;
}

.issue[resolved] .issue-key {
  text-decoration: line-through;
}

.issue-summary {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.unknown-type {
  color: #fff;
  background: rgba(9, 30, 66, 0.13);
  width: 16px;
  height: 16px;
  border-radius: 3px;
}
</style>
