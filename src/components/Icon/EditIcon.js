import IconWrapper from "./IconWrapper.vue";

export default {
  name: "EditIcon",
  props: {
    size: {
      type: String,
    },
    primaryColor: {
      type: String,
    },
    secondaryColor: {
      type: String,
    },
  },
  render(h) {
    // eslint-disable-next-line max-len
    return h(IconWrapper, {
      props: { ...this.$props },
      domProps: {
        innerHTML:
          '<svg viewBox="0 0 24 24"><path d="M4.02 19.23a1 1 0 0 0 1.18 1.18l3.81-.78-4.21-4.21-.78 3.81zm5.921-2.62l-2.12-2.12L16.306 6h.002l2.121 2.121-8.489 8.49zm9.903-9.903l-2.12-2.122A1.997 1.997 0 0 0 16.308 4c-.512 0-1.024.195-1.415.585l-9.757 9.758 4.95 4.95 9.757-9.758a2 2 0 0 0 0-2.828z" fill="currentColor" fill-rule="evenodd"/></svg>',
      },
    });
  },
};
