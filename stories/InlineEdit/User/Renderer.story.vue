<template>
  <div>
    <h5>Normal state:</h5>
    <p>
      <KitUserRenderer :user="user" />
    </p>
    <h5>Avatar only:</h5>
    <p>
      <KitUserRenderer :user="user" :avatar-only="true" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { createPerson } from '../../api-mocks/people'
import KitUserRenderer from '@/components/field-renderers/KitUserRenderer.vue'

const user = createPerson()
</script>
