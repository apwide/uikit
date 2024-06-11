<template>
  <div class="container">
    <Flag class="flag" :title="title" :description="description" :actions="actions" />
    <Flag class="flag" :title="title" :description="description" type="info" :actions="actions" />
    <Flag
      v-if="show"
      class="flag"
      :title="title"
      :description="description"
      type="info"
      :actions="actions"
      @close="show = false">
      <div class="content">
        <FieldGroup label="Give us your best email address">
          <Input v-model="value" />
        </FieldGroup>
        <div class="buttons">
          <KitButton>Skip</KitButton>
          <KitButton appearance="primary"> Send </KitButton>
        </div>
      </div>
    </Flag>
    <Flag
      v-for="appearance in appearances"
      :key="appearance"
      class="flag"
      :appearance="appearance"
      :title="title"
      :description="description"
      :actions="actions" />
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import { ref } from 'vue'
import Flag from '@/components/Flag/Flag.vue'
import Input from '@/components/Form/Input.vue'
import FieldGroup from '@/components/Form/FieldGroup.vue'

const title = ref('Welcome to the jungle')
const description = ref('We got fun and games. We got everything you want honey, we know the names.')
const actions = [{ content: 'Show me', href: 'http://google.com' }, { content: 'No thanks' }]
const appearances = ['error', 'info', 'success', 'warning']
const value = ref('')
const show = ref(true)
</script>

<style scoped>
.flag {
  margin-bottom: 10px;
}

.container {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 999;
}

.content {
  padding: 0px 24px 0px 40px;
}

.buttons {
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
}
</style>
