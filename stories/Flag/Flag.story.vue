<template>
  <div class="container">
    <KitFlag class="flag" :title="title" :description="description" :actions="actions" />
    <KitFlag class="flag" :title="title" :description="description" type="info" :actions="actions" />
    <KitFlag
      v-if="show"
      class="flag"
      :title="title"
      :description="description"
      type="info"
      :actions="actions"
      @close="show = false">
      <div class="content">
        <KitFieldGroup label="Give us your best email address">
          <Input v-model="value" />
        </KitFieldGroup>
        <div class="buttons">
          <KitButton>Skip</KitButton>
          <KitButton appearance="primary"> Send </KitButton>
        </div>
      </div>
    </KitFlag>
    <KitFlag
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
import KitFlag from '@components/Flag/KitFlag.vue'
import Input from '@/components/Form/Input.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'

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
