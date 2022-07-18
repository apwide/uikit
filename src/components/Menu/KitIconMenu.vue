<template>
    <Dropdown
        v-if="$scopedSlots.default && $scopedSlots.icon"
        class="kit-icon-menu"
        placement="bottom-end"
        :is-disabled="isDisabled"
        @close="isLocalOpen = false"
        @open="isLocalOpen = true">
        <template #trigger="{ toggle, isOpen, isDisabled }">
            <KitIconButton
                :is-selected="isOpen"
                :is-disabled="isDisabled"
                :style="{ fontSize: iconSize }"
                :title="title"
                @click="toggle">
                <slot name="icon" :is-open="isOpen" />
            </KitIconButton>
        </template>
        <slot :isOpen="isLocalOpen" />
    </Dropdown>
</template>

<script>
    import Vue from 'vue';
    import Dropdown from '../Dropdown/Dropdown.vue';
    import KitIconButton from '../Button/KitIconButton.vue';

    export default Vue.extend({
        components: { KitIconButton, Dropdown },
        props: {
            title: {
                type: String,
                default: 'Select your action'
            },
            iconSize: {
                type: String,
                default: '1em'
            },
            isDisabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isLocalOpen: false
            };
        }
    });
</script>
<style scoped>
    .kit-icon-menu {
        color: #091e42;
    }
</style>
