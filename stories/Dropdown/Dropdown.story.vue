<template>
  <div>
    <h3>Simple dropdown</h3>
    <b>selected value: {{ singleSelected }}</b>
    <p>
      <KitDropdown data-cy="simple-dropdown" label="Drop down menu">
        <KitDropdownItem :selected="singleSelected === 'first'" data-cy="simple-dropdown-item" @click="singleSelected = 'first'"> First item </KitDropdownItem>
        <KitDropdownItem :selected="singleSelected === 'second'" @click="singleSelected = 'second'">Second item</KitDropdownItem>
        <KitDropdownItem disabled> Lorem ipsum dolor sit amet consectetur adipisicing elit </KitDropdownItem>
      </KitDropdown>
    </p>
    <h3>Full width mode</h3>
    <p style="width: 500px">
      <KitDropdown data-cy="full-width-dropdown" label="Drop down menu" full-width-trigger>
        <KitDropdownItem data-cy="full-wdith-dropdown-item"> First item </KitDropdownItem>
        <KitDropdownItem>Second item</KitDropdownItem>
        <KitDropdownItem>Lorem ipsum dolor sit amet consectetur adipisicing elit</KitDropdownItem>
      </KitDropdown>
    </p>
    <h3>Grouped items</h3>
    <p>
      <KitDropdown label="Drop down menu">
        <KitDropdownGroup label="Europe">
          <KitDropdownItem>Poland</KitDropdownItem>
          <KitDropdownItem>Germany</KitDropdownItem>
          <KitDropdownItem selected>France (Selected)</KitDropdownItem>
          <KitDropdownItem>United Kingdom</KitDropdownItem>
          <KitDropdownItem>Spain</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="North America">
          <template #actions>
            <KitIconButton title="Settings" spacing="compact">
              <KitIcon type="cog" />
            </KitIconButton>
          </template>
          <KitDropdownItem>Canada</KitDropdownItem>
          <KitDropdownItem>United States of America</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownSeparator />
        <KitDropdownGroup label="Asia">
          <KitDropdownItem>China</KitDropdownItem>
          <KitDropdownItem>Japan</KitDropdownItem>
          <KitDropdownItem>India</KitDropdownItem>
        </KitDropdownGroup>
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
        <KitDropdownItem>First item</KitDropdownItem>
        <KitDropdownItem>Second item</KitDropdownItem>
        <KitDropdownItem>Lorem ipsum dolor sit amet consectetur adipisicing elit</KitDropdownItem>
      </KitDropdown>
    </p>
    <h3>Dropdown with checkboxes (selected: {{ selected }})</h3>
    <p>
      <KitDropdown label="With checkboxes" :close-on-click="false">
        <KitDropdownCheckboxItem v-model="selected" value="first"> First item </KitDropdownCheckboxItem>
        <KitDropdownCheckboxItem v-model="selected" value="second"> Second item </KitDropdownCheckboxItem>
        <KitDropdownCheckboxItem v-model="selected" value="third">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </KitDropdownCheckboxItem>
      </KitDropdown>
    </p>
    <h3>Mixed (value: {{ mixedValue }})</h3>
    <p>
      <KitDropdown label="Mixed values" :close-on-click="false">
        <KitDropdownGroup label="Europe">
          <KitDropdownItem>Poland</KitDropdownItem>
          <KitDropdownItem>Germany</KitDropdownItem>
          <KitDropdownItem>France</KitDropdownItem>
          <KitDropdownItem>United Kingdom</KitDropdownItem>
          <KitDropdownItem>Spain</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="North America">
          <KitDropdownCheckboxItem v-model="mixedValue"> Some checkbox </KitDropdownCheckboxItem>
          <KitDropdownItem>United States of America</KitDropdownItem>
        </KitDropdownGroup>
      </KitDropdown>
    </p>
    <h3>Scrolled items</h3>
    <p>
      <KitDropdown label="Drop down menu">
        <KitDropdownGroup label="Europe">
          <KitDropdownItem>Poland</KitDropdownItem>
          <KitDropdownItem>Germany</KitDropdownItem>
          <KitDropdownItem>France</KitDropdownItem>
          <KitDropdownItem>United Kingdom</KitDropdownItem>
          <KitDropdownItem>Spain</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="North America">
          <KitDropdownItem>Canada</KitDropdownItem>
          <KitDropdownItem>United States of America</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="Asia">
          <KitDropdownItem>China</KitDropdownItem>
          <KitDropdownItem>Japan</KitDropdownItem>
          <KitDropdownItem>India</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="Europe">
          <KitDropdownItem>Poland</KitDropdownItem>
          <KitDropdownItem>Germany</KitDropdownItem>
          <KitDropdownItem>France</KitDropdownItem>
          <KitDropdownItem>United Kingdom</KitDropdownItem>
          <KitDropdownItem>Spain</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="North America">
          <KitDropdownItem>Canada</KitDropdownItem>
          <KitDropdownItem>United States of America</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="Asia">
          <KitDropdownItem>China</KitDropdownItem>
          <KitDropdownItem>Japan</KitDropdownItem>
          <KitDropdownItem>India</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="Europe">
          <KitDropdownItem>Poland</KitDropdownItem>
          <KitDropdownItem>Germany</KitDropdownItem>
          <KitDropdownItem>France</KitDropdownItem>
          <KitDropdownItem>United Kingdom</KitDropdownItem>
          <KitDropdownItem>Spain</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="North America">
          <KitDropdownItem>Canada</KitDropdownItem>
          <KitDropdownItem>United States of America</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="Asia">
          <KitDropdownItem>China</KitDropdownItem>
          <KitDropdownItem>Japan</KitDropdownItem>
          <KitDropdownItem>India</KitDropdownItem>
        </KitDropdownGroup>
      </KitDropdown>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitDropdownGroup from '@components/Dropdown/KitDropdownGroup.vue'
import KitDropdownItem from '@components/Dropdown/KitDropdownItem.vue'
import KitDropdownCheckboxItem from '@components/Dropdown/KitDropdownCheckboxItem.vue'
import KitDropdown from '@/components/Dropdown/KitDropdown.vue'
import KitDropdownSeparator from '@/components/Dropdown/KitDropdownSeparator.vue'
import KitIconButton from '@/components/Button/KitIconButton.vue'
import KitIcon from '@/components/Icon/KitIcon.vue'

const singleSelected = ref('second')
const selected = ref(['second'])
const mixedValue = ref(false)
</script>

<style scoped>
.custom-trigger {
  font-size: 20px;
  cursor: pointer;
}
</style>
