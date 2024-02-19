<template>
  <div class="wrapper">
    <div class="start">
      <Button @click="onClick"> Start Onboarding </Button>
    </div>
    <Spotlight :step="1" placement="top-end" offset="-50%,-50%">
      <div slot="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </Spotlight>
    <FieldGroup label="Title" required>
      <Spotlight :step="2">
        <Input v-model="title" auto-focus />
        <div slot="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </Spotlight>
    </FieldGroup>
    <FieldGroup label="Folder" required>
      <Spotlight :step="3">
        <Input v-model="folder" />
        <div slot="message">Curabitur efficitur lorem a velit iaculis vehicula.</div>
      </Spotlight>
    </FieldGroup>
    <FieldGroup label="Type" required>
      <Spotlight :step="4">
        <KitSelect v-model="type" :options="options" :selected="selected" />
        <div slot="message">Curabitur fermentum quam turpis, eget condimentum quam consequat ac.</div>
      </Spotlight>
    </FieldGroup>
    <SpotlightOverlay />
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import KitSelect from '@components/Select/KitSelect.vue'
import SpotlightOverlay from '@/components/Spotlight/SpotlightOverlay.vue'
import Spotlight from '@/components/Spotlight/Spotlight.vue'
import Button from '@/components/Button/Button.vue'
import FieldGroup from '@/components/Form/FieldGroup.vue'
import Input from '@/components/Form/Input.vue'

const title = ref('')
const folder = ref('')
const selected = ref()
const type = ref()
const options = ref(['foo', 'bar', 'baz'])

const $spotlight = inject('$spotlight', () => undefined)

function onClick() {
  ;($spotlight as any).showSpotlight(1)
}
</script>

<style scoped>
.wrapper {
  max-width: 50%;
}
</style>
