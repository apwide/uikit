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
  background-color: rgb(222, 235, 255);
  border-radius: 3px;
  padding: 16px;
}

.kit-dark .kit-section-message {
  background-color: #1C2B41;
}

.kit-section-message .kit-section-message__icon {
  width: 40px;
  flex: 0 0 auto;
  color: rgb(7, 71, 166);
}

.kit-section-message[appearance='setup'] {
  background-color: rgb(234, 230, 255);
}

.kit-dark .kit-section-message[appearance='setup'] {
  background-color: #2B273F;
}

.kit-section-message[appearance='setup'] .kit-section-message__icon {
  color: rgb(101, 84, 192);
}

.kit-section-message[appearance='setup']
  .kit-section-message__actions
  >>> button[appearance='primary']:not([disabled='disabled']) {
  background-color: rgb(101, 84, 192);
}

.kit-section-message[appearance='warning'] {
  background-color: rgb(255, 250, 230);
}

.kit-dark .kit-section-message[appearance='warning'] {
  background-color: #332E1B;
}

.kit-section-message[appearance='warning'] .kit-section-message__icon {
  color: rgb(255, 139, 0);
  fill: rgb(255, 250, 230);
}

.kit-section-message[appearance='error'] {
  background-color: rgb(255, 235, 230);
}

.kit-dark .kit-section-message[appearance='error'] {
  background-color: #42221F;
}

.kit-section-message[appearance='error'] .kit-section-message__icon {
  color: rgb(191, 38, 0);
  fill: rgb(255, 235, 230);
}

.kit-section-message[appearance='confirmation'] {
  background-color: rgb(227, 252, 239);
}

.kit-dark .kit-section-message[appearance='confirmation'] {
  background-color: #1C3329;
}

.kit-section-message[appearance='confirmation'] .kit-section-message__icon {
  color: rgb(0, 102, 68);
  fill: rgb(227, 252, 239);
}

.kit-section-message[appearance='change'] {
  background-color: rgb(234, 230, 255);
}

.kit-dark .kit-section-message[appearance='change'] {
  background-color: #2B273F;
}

.kit-section-message[appearance='change'] .kit-section-message__icon {
  color: rgb(64, 50, 148);
  fill: rgb(234, 230, 255);
}

.kit-section-message .kit-section-message__content-wrapper {
  flex-grow: 1;
}

.kit-section-message .kit-section-message__title {
  font-size: 1.14286em;
  font-style: inherit;
  line-height: 1.25;
  color: rgb(23, 43, 77);
  font-weight: 600;
  letter-spacing: -0.006em;
  margin: 0;
}

.kit-dark .kit-section-message .kit-section-message__title {
  color: var(--apw-body-text);
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
  color: rgb(66, 82, 110);
  content: '·';
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  width: 16px;
}
</style>
