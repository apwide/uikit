<template>
  <PromisedContentLoader :width="150" :height="24" :value="user.enriched" :pending-delay="0">
    <UserEditableRenderer
      slot-scope="{ value }"
      :user="value"
      :load-options="user.getUsers"
      :editable="editable"
      v-on="$listeners" />
    <template #loader-shape>
      <circle cx="12" cy="12" :r="12" />
      <rect x="28" y="4" :rx="8" :ry="8" :width="45" :height="16" />
      <rect x="78" y="4" :rx="8" :ry="8" :width="70" :height="16" />
    </template>
    <template #error-message>
      <component
        :is="componentToUse"
        :user="{ key: user.value }"
        :editable="true"
        v-on="$listeners">
        <div class="user-error">
          <div class="avatar">
            <CrossIcon size="small" />
          </div>
          <span>{{ user.value }} <small>(deleted)</small></span>
        </div>
      </component>
    </template>
  </PromisedContentLoader>
</template>

<script setup lang="ts">
import type { User } from '@components/field-renderers/types'
import { computed } from 'vue'
import CrossIcon from '../Icon/aui/CrossIcon'
import PromisedContentLoader from '../common/PromisedContentLoader'
import UserEditableRenderer from './UserEditableRenderer'
import UserRenderer from './UserRenderer'

type Props = {
  user: User
  avatarOnly?: boolean
  editable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  avatarOnly: false,
  editable: true
})

const componentToUse = computed(() => props.editable ? UserEditableRenderer : UserRenderer)
</script>

<style scoped>
.user-error {
  display: flex;
  align-items: center;
}

.user-error > span {
  opacity: 0.5;
}

.user-error .avatar {
  color: #fff;
  background: rgba(9, 30, 66, 0.13);
  text-align: center;
  box-sizing: border-box;
  padding-top: 2px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  margin-right: 5px;
}

.user-error::after {
  line-height: 1em;
  font-size: 0.7em;
  opacity: 0.5;
}
</style>
