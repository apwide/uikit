<template>
  <div class="wrapper">
    <FieldGroup data-cy="field-group" label="Custom Select">
      <KitSelect
        v-model="value"
        data-cy="input-component"
        append-to-body
        placeholder="Quick add..."
        :select="false"
        class="select-ww"
        :options="cities">
        <template #icon>
          <SearchIcon size="small" />
        </template>
        <template #custom-action>
          <KitButton appearance="subtle" class="create">
            <template #icon-before>
              <KitIcon type="plus" size="xsmall" />
            </template>
            Create Issue
          </KitButton>
        </template>
      </KitSelect>
    </FieldGroup>
    <table>
      <thead>
        <tr>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitSelect from '@components/Select/KitSelect.vue'
import KitButton from '@components/Button/KitButton.vue'
import SearchIcon from '@components/Icon/aui/SearchIcon'
import FieldGroup from '../../src/components/Form/FieldGroup.vue'
import { cities } from '../api-mocks/fake-data'
import KitIcon from '../../src/components/Icon/KitIcon.vue'

const value = ref()
</script>
<style scoped>
.wrapper {
  padding: 20px;
  width: 245px;
  overflow: hidden;
}

.create {
  width: 100%;
  border-top: 1px solid #f6f9fc;
}

.create >>> span {
  justify-content: flex-start;
}
</style>
