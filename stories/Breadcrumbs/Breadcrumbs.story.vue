<template>
  <div>
    <h3>Only last + Copy</h3>
    <KitBreadcrumbs :copy="true" :items="items" :wrap="false" />
    <h3>Custom</h3>
    <KitBreadcrumbs>
      <KitBreadcrumbItem text="Board">
        <template #icon>
          <KitIcon size="sm" type="columns" />
        </template>
      </KitBreadcrumbItem>
      <KitBreadcrumbItem text="Agile Poooooooooooker">
        <template #icon>
          <KitIcon size="sm" type="robot" />
        </template>
      </KitBreadcrumbItem>
      <KitBreadcrumbItem class="last" text="Awesome Session Name">
        <template #icon>
          <Tooltip label="Private session">
            <KitIcon class="icon" size="sm" type="lock" />
          </Tooltip>
        </template>
        <template #link>
          <Tooltip class="tooltip" label="Session">
            <a class="link" href="#" target="_top">Session Name loooooong</a>
          </Tooltip>
        </template>
      </KitBreadcrumbItem>
    </KitBreadcrumbs>
    <h3>With very short items</h3>
    <KitBreadcrumbs :items="[{ text: 'Home' }, { text: 'dev' }, { text: '2', link: '#test/path' }]" copy />
  </div>
</template>

<script setup lang="ts">
import KitBreadcrumbs from '@components/Breadcrumbs/KitBreadcrumbs.vue'
import KitBreadcrumbItem from '@components/Breadcrumbs/KitBreadcrumbItem.vue'
import KitIcon from '../../src/components/Icon/KitIcon'
import Tooltip from '../../src/components/Tooltip/Tooltip'

const items = [
  {
    text: 'first'
  },
  {
    text: 'veeeeeeery loooooong breadcrumb'
  },
  {
    text: 'long breadcrumb'
  },
  {
    link: '#/last-item',
    text: 'never ellipsis'
  }
]
</script>
<style scoped>
.icon {
  display: flex;
}
</style>
