<template>
  <div>
    <h3>KitActionMenu</h3>
    <KitBorderedPanel title="Classy menu">
      <template #actions>
        <KitActionMenu title="Bla bla bla">
          <KitMenuItem @click="select('add')"> Add entry </KitMenuItem>
          <KitMenuItem @click="select('edit')"> Edit entry </KitMenuItem>
          <KitMenuSeparator />
          <KitMenuItem @click="select('delete')"> Delete entry </KitMenuItem>
          <KitMenuSection title="Section">
            <KitMenuItem @click="select('clone')"> Clone entry </KitMenuItem>
          </KitMenuSection>
        </KitActionMenu>
      </template>
      <KitBorderedPanelRow label="Reporting scheme" value="Some text" />
      <KitBorderedPanelRow label="Reporting scheme" value="Some text" />
      <KitBorderedPanelRow label="Selected value in the menu" :value="selectedValue" />
    </KitBorderedPanel>

    <h3>KitActionMenu - disappears if no content</h3>
    <KitBorderedPanel title="Classy menu">
      <template #actions>
        <KitActionMenu title="Bla bla bla">
          <KitMenuItem v-if="false" @click="select('add')"> Add entry </KitMenuItem>
        </KitActionMenu>
      </template>
      <KitBorderedPanelRow label="Reporting scheme" value="Some text" />
      <KitBorderedPanelRow label="Selected value in the menu" :value="selectedValue" />
    </KitBorderedPanel>
    <h3>KitActionMenu and KitIconMenu</h3>
    <KitBorderedPanel title="Classy menu">
      <template #actions>
        <KitIconMenu title="Permission menu">
          <template #icon>
            <KitIcon type="lock" />
          </template>
          <KitMenuSection> Some text </KitMenuSection>
          <KitMenuSeparator />
          <KitMenuSection title="Your permissions">
            <KitMenuItem :disabled="true"> Bla bla </KitMenuItem>
          </KitMenuSection>
          <KitMenuSeparator />
          <KitMenuItem>Click here</KitMenuItem>
        </KitIconMenu>
        <KitActionMenu title="Bla bla bla">
          <KitMenuItem @click="select('add')"> Add entry </KitMenuItem>
        </KitActionMenu>
      </template>
      <KitBorderedPanelRow label="Reporting scheme" value="Some text" />
    </KitBorderedPanel>

    <h3>Simple menu</h3>
    <div class="wrapper">
      <KitMenu>
        <MenuSection>
          <MenuItem>First item</MenuItem>
          <MenuItem>Second item</MenuItem>
          <MenuItem>Lorem ipsum dolor sit amet consectetur adipisicing elit</MenuItem>
        </MenuSection>
      </KitMenu>
    </div>
    <h3>Menu sections with labels</h3>
    <div class="wrapper">
      <KitMenu>
        <MenuSection label="North America">
          <MenuItem>Canada</MenuItem>
          <MenuItem>United States of America</MenuItem>
        </MenuSection>
        <MenuSection label="Asia">
          <MenuItem>China</MenuItem>
          <MenuItem>Japan</MenuItem>
          <MenuItem>India</MenuItem>
        </MenuSection>
      </KitMenu>
    </div>
    <h3>Items with icons</h3>
    <div class="wrapper">
      <KitMenu>
        <MenuSection>
          <MenuItem>First item</MenuItem>
          <MenuItem>Second item</MenuItem>
          <MenuItem active> Active item </MenuItem>
          <MenuItem>
            <EditorAddIcon slot="icon-before" />
            Add item
          </MenuItem>
          <MenuItem>Second item</MenuItem>
        </MenuSection>
      </KitMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import KitMenu from '@components/Menu/KitMenu.vue'
import { computed, ref } from 'vue'
import KitIconMenu from '../../src/components/Menu/KitIconMenu'
import KitMenuSection from '../../src/components/Menu/KitMenuSection'
import KitMenuSeparator from '../../src/components/Menu/KitMenuSeparator'
import KitIcon from '../../src/components/Icon/KitIcon'
import MenuItem from '@/components/Menu/MenuItem'
import MenuSection from '@/components/Menu/MenuSection'
import EditorAddIcon from '@/components/Icon/aui/EditorAddIcon'
import KitActionMenu from '@/components/Menu/KitActionMenu'
import KitMenuItem from '@/components/Menu/KitMenuItem'
import KitBorderedPanel from '@/components/layout/BorderedPanel/KitBorderedPanel'
import KitBorderedPanelRow from '@/components/layout/BorderedPanel/KitBorderedPanelRow'

const selected = ref(null)

const selectedValue = computed(() => {
  return !selected.value ? 'Nothing selected' : `"${selected.value}" was selected`
})

function select(value) {
  selected.value = value
}
</script>

<style scoped>
.wrapper {
  background: #f4f5f7;
  width: 300px;
}
</style>
