<template>
  <div class="kit-wrapper">
    <div class="kit-breadcrumbs">
      <slot>
        <BreadcrumbItem v-for="item in items" :key="item.text" :link="item.link" :text="item.text" />
      </slot>
    </div>

    <CopyToClipboard
      v-if="copy"
      :text="lastItemLink"
      placement="top-start"
      style="color: rgb(94, 108, 132)"
      label="Copy link to clipboard">
      <template #default="{ copied }">
        <KitIcon class="kit-copy-icon" size="sm" v-if="!copied" type="link" />
        <KitIcon class="kit-copy-icon" size="sm" v-else type="check" />
      </template>
    </CopyToClipboard>
  </div>
</template>

<script>
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.vue'
import KitIcon from '../Icon/KitIcon.vue'
import BreadcrumbItem from './BreadcrumbItem.vue'

export default {
  name: 'KitBreadcrumbs',
  components: {
    KitIcon,
    BreadcrumbItem,
    CopyToClipboard
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    copy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      lastItemLink: undefined
    }
  },
  watch: {
    copy: {
      immediate: true,
      handler(newCopyValue) {
        if (newCopyValue) {
          this.$nextTick(() => {
            const links = this.$el.querySelectorAll('a')
            if (links.length) {
              this.lastItemLink = links[links.length - 1].href
            }
          })
        }
      }
    }
  }
}
</script>

<style scoped>
.kit-wrapper {
  display: flex;
  align-items: center;
}

.kit-breadcrumbs {
  color: rgb(94, 108, 132);
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  line-height: 24px;
  font-size: 14px;
}

.kit-copy-icon {
  opacity: 0;
  cursor: pointer;
  transform: translate(-6px, 1px);
  transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
}

.kit-wrapper:hover .kit-copy-icon {
  opacity: 1;
  transform: scale(0.8) translate(8px, 1px);
}
</style>
