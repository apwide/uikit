<template>
    <div class="kit-breadcrumb" :with-icon="$slots.icon">
        <span class="kit-item">
            <slot name="icon" />
            <slot name="link">
                <a :href="link" :target="target">{{ text }}</a>
            </slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'BreadcrumbItem',
        props: {
            link: {
                type: String,
                default: '#'
            },
            text: {
                type: String,
                default: ''
            },
            target: {
                type: String,
                default: '_self'
            }
        }
    };
</script>

<style scoped>
    .kit-breadcrumb {
        min-width: 45px;
        display: flex;
        align-items: center;
        flex-shrink: 10;
        transition: all ease-out 0.3s;
    }

    .kit-breadcrumb[with-icon] {
        min-width: 60px;
    }

    .kit-breadcrumb:first-of-type {
        flex: 0 1 auto;
    }

    .kit-item {
        display: flex;
        min-width: 0;
        align-items: center;
    }

    .kit-item :deep(a) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgb(107, 119, 140);
        margin-left: 0;
        display: block;
    }

    [with-icon] :deep(a) {
        margin-left: 5px;
    }

    .kit-breadcrumb:after {
        display: inline-block;
        content: '/';
        color: rgb(122, 134, 154);
        flex-shrink: 0;
        text-align: center;
        margin: 0 6px;
        width: 8px;
    }

    .kit-breadcrumb:last-of-type:after {
        content: none;
    }

    .kit-breadcrumb:last-child {
        flex: 0 1 auto;
        min-width: auto;
    }

    .kit-breadcrumb:hover {
        flex: 1 0 auto;
        opacity: 1;
        transition: all ease-out 0.3s;
    }
</style>
