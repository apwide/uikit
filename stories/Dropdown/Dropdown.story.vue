<template>
  <div>
    <h3>Simple dropdown</h3>
    <p>
      <KitDropdown data-cy="simple-dropdown" label="Drop down menu">
        <DropdownItem data-cy="simple-dropdown-item"> First item </DropdownItem>
        <DropdownItem>Second item</DropdownItem>
        <DropdownItem disabled> Lorem ipsum dolor sit amet consectetur adipisicing elit </DropdownItem>
      </KitDropdown>
    </p>
    <h3>Full width mode</h3>
    <p style="width: 500px">
      <KitDropdown data-cy="full-width-dropdown" label="Drop down menu" full-width-trigger>
        <DropdownItem data-cy="full-wdith-dropdown-item"> First item </DropdownItem>
        <DropdownItem>Second item</DropdownItem>
        <DropdownItem>Lorem ipsum dolor sit amet consectetur adipisicing elit</DropdownItem>
      </KitDropdown>
    </p>
    <h3>Grouped items</h3>
    <p>
      <KitDropdown label="Drop down menu">
        <DropdownGroup label="Europe">
          <DropdownItem>Poland</DropdownItem>
          <DropdownItem>Germany</DropdownItem>
          <DropdownItem>France</DropdownItem>
          <DropdownItem>United Kingdom</DropdownItem>
          <DropdownItem>Spain</DropdownItem>
        </DropdownGroup>
        <DropdownGroup label="North America">
          <template #actions>
            <KitIconButton title="Settings" spacing="compact">
              <KitIcon type="cog" />
            </KitIconButton>
          </template>
          <DropdownItem>Canada</DropdownItem>
          <DropdownItem>United States of America</DropdownItem>
        </DropdownGroup>
        <KitDropdownSeparator />
        <DropdownGroup label="Asia">
          <DropdownItem>China</DropdownItem>
          <DropdownItem>Japan</DropdownItem>
          <DropdownItem>India</DropdownItem>
        </DropdownGroup>
      </KitDropdown>
    </p>
    <h3>Custom trigger</h3>
    <p>
      <KitDropdown label="Drop down menu">
        <template #trigger="{ toggle, isOpen }">
          <div class="custom-trigger">
            <span v-if="isOpen" @click="toggle">💥</span>
            <span v-else @click="toggle">🎁</span>
          </div>
        </template>
        <DropdownItem>First item</DropdownItem>
        <DropdownItem>Second item</DropdownItem>
        <DropdownItem>Lorem ipsum dolor sit amet consectetur adipisicing elit</DropdownItem>
      </KitDropdown>
    </p>
    <h3>Dropdown with checkboxes (selected: {{ selected }})</h3>
    <p>
      <KitDropdown label="With checkboxes" :close-on-click="false">
        <DropdownCheckboxItem v-model="selected" value="first"> First item </DropdownCheckboxItem>
        <DropdownCheckboxItem v-model="selected" value="second"> Second item </DropdownCheckboxItem>
        <DropdownCheckboxItem v-model="selected" value="third">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </DropdownCheckboxItem>
      </KitDropdown>
    </p>
    <h3>Mixed (value: {{ mixedValue }})</h3>
    <p>
      <KitDropdown label="Mixed values" :close-on-click="false">
        <DropdownGroup label="Europe">
          <DropdownItem>Poland</DropdownItem>
          <DropdownItem>Germany</DropdownItem>
          <DropdownItem>France</DropdownItem>
          <DropdownItem>United Kingdom</DropdownItem>
          <DropdownItem>Spain</DropdownItem>
        </DropdownGroup>
        <DropdownGroup label="North America">
          <DropdownCheckboxItem v-model="mixedValue"> Some checkbox </DropdownCheckboxItem>
          <DropdownItem>United States of America</DropdownItem>
        </DropdownGroup>
      </KitDropdown>
    </p>
    <h3>Scrolled items</h3>
    <p>
      <KitDropdown label="Drop down menu">
        <DropdownGroup label="Europe">
          <DropdownItem>Poland</DropdownItem>
          <DropdownItem>Germany</DropdownItem>
          <DropdownItem>France</DropdownItem>
          <DropdownItem>United Kingdom</DropdownItem>
          <DropdownItem>Spain</DropdownItem>
        </DropdownGroup>
        <DropdownGroup label="North America">
          <DropdownItem>Canada</DropdownItem>
          <DropdownItem>United States of America</DropdownItem>
        </DropdownGroup>
        <DropdownGroup label="Asia">
          <DropdownItem>China</DropdownItem>
          <DropdownItem>Japan</DropdownItem>
          <DropdownItem>India</DropdownItem>
        </DropdownGroup>
        <DropdownGroup label="Europe">
          <DropdownItem>Poland</DropdownItem>
          <DropdownItem>Germany</DropdownItem>
          <DropdownItem>France</DropdownItem>
          <DropdownItem>United Kingdom</DropdownItem>
          <DropdownItem>Spain</DropdownItem>
        </DropdownGroup>
        <DropdownGroup label="North America">
          <DropdownItem>Canada</DropdownItem>
          <DropdownItem>United States of America</DropdownItem>
        </DropdownGroup>
        <DropdownGroup label="Asia">
          <DropdownItem>China</DropdownItem>
          <DropdownItem>Japan</DropdownItem>
          <DropdownItem>India</DropdownItem>
        </DropdownGroup>
        <DropdownGroup label="Europe">
          <DropdownItem>Poland</DropdownItem>
          <DropdownItem>Germany</DropdownItem>
          <DropdownItem>France</DropdownItem>
          <DropdownItem>United Kingdom</DropdownItem>
          <DropdownItem>Spain</DropdownItem>
        </DropdownGroup>
        <DropdownGroup label="North America">
          <DropdownItem>Canada</DropdownItem>
          <DropdownItem>United States of America</DropdownItem>
        </DropdownGroup>
        <DropdownGroup label="Asia">
          <DropdownItem>China</DropdownItem>
          <DropdownItem>Japan</DropdownItem>
          <DropdownItem>India</DropdownItem>
        </DropdownGroup>
      </KitDropdown>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitDropdown from '@/components/Dropdown/KitDropdown.vue'
import DropdownItem from '@/components/Dropdown/DropdownItem.vue'
import DropdownGroup from '@/components/Dropdown/DropdownGroup.vue'
import DropdownCheckboxItem from '@/components/Dropdown/DropdownCheckboxItem.vue'
import KitDropdownSeparator from '@/components/Dropdown/KitDropdownSeparator.vue'
import KitIconButton from '@/components/Button/KitIconButton.vue'
import KitIcon from '@/components/Icon/KitIcon.vue'

const selected = ref(['second'])
const mixedValue = ref(false)
</script>

<style scoped>
.custom-trigger {
  font-size: 20px;
  cursor: pointer;
}
</style>
