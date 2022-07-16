<template>
    <DropdownItem class="kit-menu-item" @click="$emit('click', $event)">
        <slot />
    </DropdownItem>
</template>
<script>
    import Vue from 'vue';
    import DropdownItem from '../Dropdown/DropdownItem.vue';

    export default Vue.extend({
        components: { DropdownItem }
    });
</script>
<style scoped>
.kit-menu-item {
  color: rgb(66, 82, 110);
  min-width: 160px;
}
</style>
