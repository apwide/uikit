<template>
  <div>
    <h3>Only last + Copy</h3>
    <Breadcrumbs :copy="true" :items="items" :wrap="false" />
    <h3>Custom</h3>
    <Breadcrumbs>
      <BreadcrumbItem text="Board">
        <KitIcon slot="icon" size="sm" type="columns" />
      </BreadcrumbItem>
      <BreadcrumbItem text="Agile Poooooooooooker">
        <KitIcon slot="icon" size="sm" type="robot" />
      </BreadcrumbItem>
      <BreadcrumbItem class="last" text="Awesome Session Name">
        <Tooltip slot="icon" label="Private session">
          <KitIcon class="icon" size="sm" type="lock" />
        </Tooltip>
        <Tooltip slot="link" class="tooltip" label="Session">
          <a class="link" href="#" target="_top">Session Name loooooong</a>
        </Tooltip>
      </BreadcrumbItem>
    </Breadcrumbs>
    <h3>With very short items</h3>
    <Breadcrumbs :items="[{ text: 'Home' }, { text: 'dev' }, { text: '2', link: '#test/path' }]" copy />
  </div>
</template>

<script>
import KitIcon from '../../src/components/Icon/KitIcon'
import Breadcrumbs from '../../src/components/Breadcrumbs/Breadcrumbs'
import BreadcrumbItem from '../../src/components/Breadcrumbs/BreadcrumbItem'
import Tooltip from '../../src/components/Tooltip/Tooltip'

export default {
  name: 'BreadcrumbsStory',
  components: {
    KitIcon,
    Breadcrumbs,
    BreadcrumbItem,
    Tooltip
  },
  data() {
    return {
      items: [
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
    }
  }
}
</script>
<style scoped>
.icon {
  display: flex;
}
</style>
