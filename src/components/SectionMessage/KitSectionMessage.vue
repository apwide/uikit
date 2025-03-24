<template>
  <section class="kit-section-message" :appearance="appearance">
    <div v-if="!hideIcon && Icon" class="kit-section-message__icon">
      <Icon />
    </div>
    <div class="kit-section-message__content-wrapper">
      <h1 v-if="title" class="kit-section-message__title">
        {{ title }}
      </h1>
      <div class="kit-section-message__content">
        <slot />
      </div>
      <div v-if="$slots.actions" class="kit-section-message__actions">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MagicStick from '@components/Icon/MagicStick.vue'
import InfoIcon from '../Icon/aui/InfoIcon'
import WarningIcon from '../Icon/aui/WarningIcon'
import ErrorIcon from '../Icon/aui/ErrorIcon'
import CheckCircleIcon from '../Icon/aui/CheckCircleIcon'
import QuestionCircleIcon from '../Icon/aui/QuestionCircleIcon'

type SectionMessageAppearance = 'info' | 'warning' | 'error' | 'confirmation' | 'change' | 'setup'

type Props = {
  title?: string
  hideIcon?: boolean
  appearance?: SectionMessageAppearance
}
const props = withDefaults(defineProps<Props>(), {
  appearance: 'info'
})

const Icon = computed(() => {
  switch (props.appearance) {
    case 'confirmation':
      return CheckCircleIcon
    case 'change':
      return QuestionCircleIcon
    case 'error':
      return ErrorIcon
    case 'warning':
      return WarningIcon
    case 'info':
      return InfoIcon
    case 'setup':
      return MagicStick
  }
  return undefined
})
</script>

<style scoped>
.kit-section-message {
  display: flex;
  background-color: var(--kit-section-message-bg);
  border-radius: 3px;
  padding: 16px;
}

.kit-section-message .kit-section-message__icon {
  width: 40px;
  flex: 0 0 auto;
  color: var(--kit-section-message-icon);
}

.kit-section-message[appearance='setup'] {
  background-color: var(--kit-section-message-setup-bg);
}

.kit-section-message[appearance='setup'] .kit-section-message__icon {
  color: var(--kit-section-message-setup-icon);
}

.kit-section-message[appearance='setup']
  .kit-section-message__actions
  >>> button[appearance='primary']:not([disabled='disabled']) {
  background-color: var(--kit-section-message-setup-primary-bg);
}

.kit-section-message[appearance='warning'] {
  background-color: var(--kit-section-message-warn-bg);
}

.kit-section-message[appearance='warning'] .kit-section-message__icon {
  color: var(--kit-section-message-warn-icon);
  fill: var(--kit-section-message-warn-bg);
}

.kit-section-message[appearance='error'] {
  background-color: var(--kit-section-message-error-bg);
}

.kit-section-message[appearance='error'] .kit-section-message__icon {
  color: var(--kit-section-message-error-icon);
  fill: var(--kit-section-message-error-bg);
}

.kit-section-message[appearance='confirmation'] {
  background-color: var(--kit-section-message-confirm-bg);
}

.kit-section-message[appearance='confirmation'] .kit-section-message__icon {
  color: var(--kit-section-message-confirm-icon);
  fill: var(--kit-section-message-confirm-bg);
}

.kit-section-message[appearance='change'] {
  background-color: var(--kit-section-message-change-bg);
}

.kit-section-message[appearance='change'] .kit-section-message__icon {
  color: var(--kit-section-message-change-icon);
  fill: var(--kit-section-message-change-bg);
}

.kit-section-message .kit-section-message__content-wrapper {
  flex-grow: 1;
}

.kit-section-message .kit-section-message__title {
  font-size: 1.14286em;
  font-style: inherit;
  line-height: 1.25;
  color: var(--kit-section-message-title);
  font-weight: 600;
  letter-spacing: -0.006em;
  margin: 0;
}

.kit-section-message .kit-section-message__content:not(:first-child) {
  margin-top: 8px;
}

.kit-section-message .kit-section-message__actions {
  margin-top: 8px;
}

.kit-section-message .kit-section-message__actions ul {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.kit-section-message .kit-section-message__actions ul li {
  align-items: center;
  display: flex;
  margin: 0;
}

.kit-section-message .kit-section-message__actions ul li + li::before {
  color: var(--kit-section-mmesage-point);
  content: '·';
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  width: 16px;
}
</style>
