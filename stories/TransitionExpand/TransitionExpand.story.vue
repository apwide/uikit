<template>
  <div>
    <KitFieldGroup>
      <KitButton @click="toggle"> Toggle </KitButton>
    </KitFieldGroup>
    <KitFieldGroup>
      <KitCheckbox v-model="enterTransition"> Enter transition </KitCheckbox>
      <KitCheckbox v-model="leaveTransition"> Leave transition </KitCheckbox>
    </KitFieldGroup>
    <KitTransitionExpand :enter-transition="enterTransition" :leave-transition="leaveTransition">
      <div v-if="expanded" class="content">
        Magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet.
      </div>
    </KitTransitionExpand>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitTransitionExpand from '@/components/common/KitTransitionExpand.vue'
import KitButton from '@/components/Button/Button.vue'
import KitCheckbox from '@/components/Checkbox/KitCheckbox.vue'
import KitFieldGroup from '@/components/Form/FieldGroup.vue'

const expanded = ref(false)
const enterTransition = ref(true)
const leaveTransition = ref(true)

function toggle() {
  expanded.value = !expanded.value
}
</script>

<style scoped>
.content {
  background: lightblue;
  overflow: hidden;
}
</style>
