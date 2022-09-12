<template>
  <div>
    <h3>Simple</h3>
    <KitTabContainer v-model="active">
      <KitTabHeader v-for="i in tabs" :id="i" :key="i" slot="tabs" :disabled="i === 4">
        <span>Tab {{ i }}</span>
      </KitTabHeader>
      <KitTabContent v-for="i in tabs" :id="i" slot="content" :key="i">
        <span class="content">Tab Content {{ i }}</span>
      </KitTabContent>
    </KitTabContainer>
    <h3>With tooltip and badge</h3>
    <KitTabContainer v-model="active">
      <KitTabHeader v-for="i in tabs" :id="i" :key="i" slot="tabs" :disabled="i === 4">
        <KitTooltip :label="'Tab ' + i" append-to-body>
          <div class="tab-item">
            <span class="title">Tab {{ i }}</span>
            <KitBadge appearance="default" :value="i" />
          </div>
        </KitTooltip>
      </KitTabHeader>
      <KitTabHeader id="custom" key="custom" slot="tabs" :inactive="true"> Inactive Tab </KitTabHeader>
      <KitTabContent v-for="i in tabs" :id="i" slot="content" :key="i">
        <span class="content">Tab Content {{ i }}</span>
      </KitTabContent>
    </KitTabContainer>
    <h3>Very long</h3>
    <KitTabContainer v-model="active">
      <KitTabHeader v-for="i in tabs" :id="i" :key="i" slot="tabs" :disabled="i === 4">
        Verrryyy Loooooong Tab {{ i }}
      </KitTabHeader>
      <KitTabContent v-for="i in tabs" :id="i" slot="content" :key="i">
        <span class="content">Verrryyy Loooooong Tab Content {{ i }}</span>
      </KitTabContent>
    </KitTabContainer>
  </div>
</template>

<script>
import KitTooltip from '../../src/components/Tooltip/Tooltip'
import KitBadge from '../../src/components/Badge/Badge'
import { KitTabContainer, KitTabContent, KitTabHeader } from '@/components/Tabs'

export default {
  name: 'TabsStory',
  components: {
    KitBadge,
    KitTooltip,
    KitTabContainer,
    KitTabContent,
    KitTabHeader
  },
  data() {
    return {
      active: 1,
      tabs: 8
    }
  }
}
</script>

<style scoped>
.content {
  align-items: center;
  background-color: rgb(244, 245, 247);
  border-radius: 3px;
  color: rgb(107, 119, 140);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 4em;
  font-weight: 500;
  justify-content: center;
  margin-bottom: 8px;
  margin-top: 16px;
  padding: 32px;
}

.tab-item {
  display: inline-flex;
  align-items: center;
  width: 100%;
}

.title {
  margin-right: 8px;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
