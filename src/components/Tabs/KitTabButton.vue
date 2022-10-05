<template>
  <button class="kit-tab-button" type="button" @click="onClick" :disabled="disabled"><slot /></button>
</template>
<script>
export default {
  name: 'KitTabButton',
  inject: {
    select: {
      default: () => () => {
        // eslint-disable-next-line no-console
        console.error('TabKitButton: this component can only be used with KitTabProvider.')
      }
    },
    state: {
      default: () => ({
        activeTab: undefined
      })
    }
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    stretch: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      if (!this.disabled && !this.inactive) {
        this.select(this.id)
      }
    }
  }
}
</script>

<style scoped>
button {
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  line-height: 1.8;
  margin: 0;
  text-align: left;
  text-decoration: none;
  color: rgb(66, 82, 110);
  outline: none;
  padding: 4px 8px;
  min-width: 70px;
}

/*
[stretch] {
  flex-grow: 1;
}

button:not([inactive]):hover {
  color: #0052cc;
}

[active] {
  color: rgb(0, 82, 204);
}

[active]:after {
  content: '';
  border-radius: 2px;
  bottom: 0;
  margin: 0;
  position: absolute;
  width: inherit;
  left: 5px;
  right: 5px;
  border-bottom: 2px solid rgb(0, 82, 204);
  height: 0;
}

[inactive] {
  color: rgb(66, 82, 110);
  cursor: default;
}
*/
[disabled] {
  color: rgb(165, 173, 186);
  pointer-events: none;
}
</style>
