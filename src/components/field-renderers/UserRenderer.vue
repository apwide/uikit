<template>
  <div class="user" :appearance="appearance" @click="onClick">
    <slot>
      <template v-if="user">
        <img class="avatar" :src="user.avatar" :alt="alt === undefined ? user.name : ''" :title="user.name" />
        <component :is="tag" v-if="!avatarOnly" class="user-name" :href="link" target="_top">
          {{ user.name }}
        </component>
      </template>
    </slot>
  </div>
</template>

<script setup lang="ts">

import type { User } from '@components/field-renderers/types'

type Props = {
  user?: User
  avatarOnly?: boolean
  tag?: string
  appearance?: 'micro'
  alt?: string
  link?: string
}

const props = withDefaults(defineProps<Props>(), {
  avatarOnly: false,
  tag: 'span',
  link: '#'
})

function onClick(e: MouseEvent) {
  if (props.tag === 'a') {
    e.stopPropagation()
  }
}
</script>
<style scoped>
.user {
  display: flex;
  align-items: center;
  height: 24px;
  overflow: hidden;
}

.avatar {
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  border-radius: 50%;
  margin-right: 5px;
  background: rgba(9, 30, 66, 0.13);
}

.user[appearance='micro'] {
  height: 16px;
  font-size: 85%;
}

[appearance='micro'] .avatar {
  height: 16px;
  width: 16px;
}

a.user-name {
  color: #007aff;
}

.user-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
