<template>
  <div>
    <div class="buttons-group">
      <KitButton v-tooltip.top="{ label: `I'm at the top` }"> Top </KitButton>
      <KitButton v-tooltip.right="{ label: `I'm at the right` }"> Right </KitButton>
      <KitButton v-tooltip.bottom="{ label: `I'm at the bottom` }"> Bottom </KitButton>
      <KitButton v-tooltip.left="{ label: `I'm at the left` }"> Left </KitButton>
    </div>
    <div class="buttons-group">
      <KitButton v-tooltip.right="{ label: 'Bigger offset here', offset: '0,20' }"> Custom offset </KitButton>
    </div>
    <div class="buttons-group">
      <KitButton v-tooltip.right="{ label: `Instant tooltip`, withDelay: false }"> Without delay </KitButton>
    </div>
    <div class="buttons-group">
      <KitButton v-tooltip.top="{ label: currentTime }"> Dynamic label </KitButton>
    </div>
    <div class="buttons-group">
      <KitToggle v-model="enabled" />
      <KitButton v-tooltip.top="{ label: `I'm enabled now!`, disabled: !enabled }">
        Disable using 'disabled' prop: disabled={{ !enabled }}
      </KitButton>
    </div>
    <div class="buttons-group">
      <KitToggle v-model="withLabel" />
      <KitButton v-tooltip.top="label"> Disable using empty label: label="{{ label }}" </KitButton>
    </div>
    <div class="buttons-group">
      <div v-tooltip="`I'm on a div`">Tooltip on plain div</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import KitToggle from '@/components/Toggle/KitToggle.vue'
import KitButton from '@/components/Button/Button.vue'

const currentTime = ref(new Date().toUTCString())
const interval = ref()
const enabled = ref(true)
const withLabel = ref(true)

const label = computed(() => (withLabel.value ? "I'm enabled now!" : undefined))

onMounted(() => {
  interval.value = setInterval(() => {
    currentTime.value = new Date().toUTCString()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval.value)
})
</script>

<style scoped>
.buttons-group {
  max-width: 800px;
  margin-top: 50px;
  display: flex;
  align-items: center;
}
</style>
