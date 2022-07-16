<template>
    <div
        tabindex="0" prevent-outline
        data-cy="view-content"
        class="kit-inline-edit-view-content"
        @keyup.enter="onEnter"
        @click="onClick"
        @mousedown="onMouseDown">
        <div class="kit-inline-edit-view-content__label" data-cy="label" tabindex="-1">
            <slot/>
            <KitIconButton title="Edit this item" class="kit-inline-edit-view-content__pencil-icon">
                <KitIcon type="pen" style="font-size: 0.8rem" />
            </KitIconButton>
        </div>
    </div>
</template>

<script>
    import KitIcon from '../Icon/KitIcon.vue';
    import KitIconButton from '../Button/KitIconButton.vue';

    const DRAG_THRESHOLD = 5;

    export default {
        name: 'InlineEditViewContent',
        components: { KitIconButton, KitIcon },
        data() {
            return {
                startX: 0,
                startY: 0
            };
        },
        methods: {
            onMouseDown(e) {
                this.startX = e.clientX;
                this.startY = e.clientY;
            },
            onEnter() {
                this.$emit('edit-requested');
            },
            onClick(e) {
                if (this.mouseHasMoved(e)) return;
                this.$emit('edit-requested');
            },
            mouseHasMoved({ clientX, clientY }) {
                return (
                    Math.abs(this.startX - clientX) >= DRAG_THRESHOLD
                    || Math.abs(this.startY - clientY) >= DRAG_THRESHOLD
                );
            }

        }
    };
</script>

<style scoped>
    [prevent-outline] {
        outline: none;
    }

    .kit-inline-edit-view-content__label {
        display: flex;
      justify-content: space-between;
        align-items: center;
        background-color: transparent;
        border-radius: 3px;
        outline: none;
        border: transparent 2px solid;
        min-width: 44px;
        cursor: pointer;
        padding: 6px;
    }

    [align="end"] > .kit-inline-edit-view-content__label {
        justify-content: flex-end;
    }

    [compact] > .kit-inline-edit-view-content__label {
        padding: 0;
    }

    :focus > .kit-inline-edit-view-content__label {
        border: 2px solid #4C9AFF;
        background: transparent;
    }

    .kit-inline-edit-view-content__label:hover {
        background-color: #EBECF0;
    }

    .kit-inline-edit-view-content__pencil-icon {
        font-size: initial;
        opacity: 0;
        margin: -6px -5px;
    }

    .view-content:not([icon]) .kit-inline-edit-view-content__pencil-icon {
        display: none;
    }

    .kit-inline-edit-view-content__label:hover .kit-inline-edit-view-content__pencil-icon {
        opacity: 1;
    }
</style>
