<template>
  <div class="date" v-text="formattedDate" />
</template>

<script setup lang="ts">
import format from 'date-fns/format'
import { computed } from 'vue'

type Props = {
  date?: string | number
}

const props = defineProps<Props>()

const formattedDate = computed(() => props.date && format(new Date(props.date), 'dd MMMM yyyy'))
</script>

<style scoped>
.date:empty::after {
  content: '\feff';
  visibility: hidden;
}
</style>
