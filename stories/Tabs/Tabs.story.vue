<template>
  <div>
    <h3>Simple</h3>
    <KitTabProvider v-model="active">
      <KitTabHeaders>
        <KitTabHeader v-for="i in tabs" :id="i" :key="i" :disabled="i === 4">
          <span>Tab {{ i }}</span>
        </KitTabHeader>
      </KitTabHeaders>
      <KitTabPanels>
        <KitTabPanel v-for="i in tabs" :id="i" :key="i">
          <div class="content">Tab Content {{ i }}</div>
        </KitTabPanel>
      </KitTabPanels>
    </KitTabProvider>
    <hr />

    <h3>Draggable</h3>
    <KitTabProvider v-model="active">
      <KitTabHeaders
        reorderable
        :reorderable-ids-list="tabs"
        @reorder="onReorder">
        <KitTabHeader reorderable v-for="i in tabs" :id="i" :key="i" :disabled="i === 4">
          <span>Tab {{ i }}</span>
        </KitTabHeader>
        <KitTabHeader id="cog">
          <KitIcon type="cog" />
        </KitTabHeader>
      </KitTabHeaders>
      <KitTabPanels>
        <KitTabPanel v-for="i in tabs" :id="i" :key="i">
          <div class="content">Tab Content {{ i }}</div>
        </KitTabPanel>
      </KitTabPanels>
    </KitTabProvider>

    <h3>With tooltip and badge</h3>
    <KitTabProvider v-model="active">
      <KitTabHeaders>
        <KitTabHeader v-for="i in tabs" :id="i" :key="i" :disabled="i === 4">
          <KitTooltip :label="'Tab ' + i" append-to-body>
            <div class="tab-item">
              <span class="title">Tab {{ i }}</span>
              <KitBadge :value="i" appearance="default" />
            </div>
          </KitTooltip>
        </KitTabHeader>
      </KitTabHeaders>
      <KitTabPanel v-for="i in tabs" :id="i" :key="i">
        <span class="content">Tab Content {{ i }}</span>
      </KitTabPanel>
    </KitTabProvider>

    <h3>Very long</h3>
    <KitTabProvider v-model="active">
      <KitTabHeaders>
        <KitTabHeader v-for="i in tabs" :id="i" :key="i" :disabled="i === 4">
          Verrryyy Loooooong Tab {{ i }}
        </KitTabHeader>
      </KitTabHeaders>
      <KitTabPanel v-for="i in tabs" :id="i" :key="i">
        <span class="content">Tab Content {{ i }}</span>
      </KitTabPanel>
    </KitTabProvider>

    <h3>With custom tab headers</h3>
    <KitTabProvider v-model="active">
      <KitTabHeaders>
        <KitTabHeader v-for="i in tabs" :id="i" :key="i" custom>
          <KitTabButton :id="i" :disabled="i === 4"> Tab {{ i }} </KitTabButton>
          <KitIconButton @click="click" title="Configure tabs">
            <KitIcon type="cog" spacing="compact" />
          </KitIconButton>
        </KitTabHeader>
        <KitTabHeader id="cog" custom>
          <KitActionMenu>
            <KitMenuItem>Entry 1</KitMenuItem>
            <KitMenuItem>Entry 2</KitMenuItem>
          </KitActionMenu>
        </KitTabHeader>
      </KitTabHeaders>
      <KitTabPanel v-for="i in tabs" :id="i" :key="i">
        <span class="content">Tab Content {{ i }}</span>
      </KitTabPanel>
    </KitTabProvider>
  </div>
</template>

<script>
import KitTooltip from '../../src/components/Tooltip/Tooltip'
import KitBadge from '../../src/components/Badge/Badge'
import KitTabProvider from '../../src/components/Tabs/KitTabProvider'
import KitTabHeaders from '../../src/components/Tabs/KitTabHeaders'
import KitTabHeader from '../../src/components/Tabs/KitTabHeader'
import KitTabPanel from '../../src/components/Tabs/KitTabPanel'
import KitTabButton from '../../src/components/Tabs/KitTabButton'
import KitIconButton from '../../src/components/Button/KitIconButton'
import KitIcon from '../../src/components/Icon/KitIcon'
import KitActionMenu from '../../src/components/Menu/KitActionMenu'
import KitMenuItem from '../../src/components/Menu/KitMenuItem'
import KitTabPanels from '../../src/components/Tabs/KitTabPanels'

export default {
  name: 'TabsStory',
  components: {
    KitTabPanels,
    KitMenuItem,
    KitActionMenu,
    KitIcon,
    KitIconButton,
    KitTabButton,
    KitTabPanel,
    KitTabHeaders,
    KitTabProvider,
    KitTabHeader,
    KitBadge,
    KitTooltip
  },
  data() {
    return {
      active: 1,
      tabs: [0, 1, 2, 3, 4, 5, 6]
    }
  },
  methods: {
    click() {
      alert('clicked')
    },
    onReorder(newList) {
      this.tabs = newList
      console.log('Tabs reordered', newList)
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
