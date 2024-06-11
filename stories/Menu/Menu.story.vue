<template>
  <div>
    <h3>KitActionMenu</h3>
    <BorderedPanel title="Classy menu">
      <template #actions>
        <KitActionMenu title="Bla bla bla">
          <KitMenuItem @click="select('add')"> Add entry </KitMenuItem>
          <KitMenuItem @click="select('edit')"> Edit entry </KitMenuItem>
          <KitMenuSeparator />
          <KitMenuItem @click="select('delete')"> Delete entry </KitMenuItem>
        </KitActionMenu>
      </template>
      <BorderedPanelRow label="Reporting scheme" value="Some text" />
      <BorderedPanelRow label="Reporting scheme" value="Some text" />
      <BorderedPanelRow label="Selected value in the menu" :value="selectedValue" />
    </BorderedPanel>

    <h3>KitActionMenu - disappears if no content</h3>
    <BorderedPanel title="Classy menu">
      <template #actions>
        <KitActionMenu title="Bla bla bla">
          <KitMenuItem v-if="false" @click="select('add')"> Add entry </KitMenuItem>
        </KitActionMenu>
      </template>
      <BorderedPanelRow label="Reporting scheme" value="Some text" />
      <BorderedPanelRow label="Selected value in the menu" :value="selectedValue" />
    </BorderedPanel>
    <h3>KitActionMenu and KitIconMenu</h3>
    <BorderedPanel title="Classy menu">
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
      <BorderedPanelRow label="Reporting scheme" value="Some text" />
    </BorderedPanel>

    <h3>Simple menu</h3>
    <div class="wrapper">
      <Menu>
        <MenuSection>
          <MenuItem>First item</MenuItem>
          <MenuItem>Second item</MenuItem>
          <MenuItem>Lorem ipsum dolor sit amet consectetur adipisicing elit</MenuItem>
        </MenuSection>
      </Menu>
    </div>
    <h3>Menu sections with labels</h3>
    <div class="wrapper">
      <Menu>
        <MenuSection label="North America">
          <MenuItem>Canada</MenuItem>
          <MenuItem>United States of America</MenuItem>
        </MenuSection>
        <MenuSection label="Asia">
          <MenuItem>China</MenuItem>
          <MenuItem>Japan</MenuItem>
          <MenuItem>India</MenuItem>
        </MenuSection>
      </Menu>
    </div>
    <h3>Items with icons</h3>
    <div class="wrapper">
      <Menu>
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
      </Menu>
    </div>
  </div>
</template>

<script>
import KitIconMenu from '../../src/components/Menu/KitIconMenu'
import KitMenuSection from '../../src/components/Menu/KitMenuSection'
import KitMenuSeparator from '../../src/components/Menu/KitMenuSeparator'
import KitIcon from '../../src/components/Icon/KitIcon'
import Menu from '@/components/Menu/Menu'
import MenuItem from '@/components/Menu/MenuItem'
import MenuSection from '@/components/Menu/MenuSection'
import EditorAddIcon from '@/components/Icon/aui/EditorAddIcon'
import KitActionMenu from '@/components/Menu/KitActionMenu'
import KitMenuItem from '@/components/Menu/KitMenuItem'
import BorderedPanel from '@/components/layout/BorderedPanel/KitBorderedPanel'
import BorderedPanelRow from '@/components/layout/BorderedPanel/KitBorderedPanelRow'

export default {
  name: 'MenuStory',
  components: {
    KitIcon,
    KitMenuSeparator,
    KitMenuSection,
    KitIconMenu,
    BorderedPanelRow,
    BorderedPanel,
    KitActionMenu,
    KitMenuItem,
    Menu,
    MenuItem,
    MenuSection,
    EditorAddIcon
  },
  data() {
    return {
      selected: null
    }
  },
  computed: {
    selectedValue() {
      if (!this.selected) {
        return 'Nothing selected'
      }

      return `"${this.selected}" was selected`
    }
  },
  methods: {
    select(value) {
      this.selected = value
    }
  }
}
</script>

<style scoped>
.wrapper {
  background: #f4f5f7;
  width: 300px;
}
</style>
