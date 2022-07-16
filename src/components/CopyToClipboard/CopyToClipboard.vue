<template>
    <Tooltip
        :label="tooltip" :placement="placement" :spacing="spacing"
        :disabled="hasTitle">
        <div class="content" :title="displayedTitle" @click.stop.prevent="onClick">
            <slot :copied="copied">
                <Button :appearance="appearance">
                    <KitIcon
                        v-if="!copied" :type="iconType" :size="iconSize"
                        :icon-style="iconStyle" />
                    <KitIcon v-else type="check" />
                </Button>
            </slot>
        </div>
    </Tooltip>
</template>

<script>
    import Button from '../Button/Button.vue';
    import KitIcon from '../Icon/KitIcon.vue';
    import Tooltip from '../Tooltip/Tooltip.vue';
    import SetToClipboard from './SetToClipboard';

    export default {
        name: 'CopyToClipboard',
        components: { Tooltip, Button, KitIcon },
        props: {
            appearance: {
                type: String,
                default: 'subtle'
            },
            spacing: {
                type: String,
                default: 'subtle'
            },
            text: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: 'Copy to clipboard'
            },
            placement: {
                type: String,
                default: 'top'
            },
            iconType: {
                type: String,
                default: 'clone'
            },
            iconSize: {
                type: String
            },
            iconStyle: {
                type: String
            },
            title: {
                type: String
            }
        },
        data() {
            return {
                copied: false,
                timeout: undefined
            };
        },
        computed: {
            hasTitle() {
                return Boolean(this.title);
            },
            displayedTitle() {
                return this.copied ? 'Copied' : this.title;
            },
            tooltip() {
                return this.copied ? 'Copied' : this.label;
            }
        },
        beforeDestroy() {
            clearTimeout(this.timeout);
        },
        methods: {
            onClick() {
                SetToClipboard(this.text);
                this.copied = true;
                this.timeout = setTimeout(() => {
                    this.copied = false;
                }, 2000);
            }
        }
    };
</script>

<style scoped>
.content {
    display: flex;
}
</style>
