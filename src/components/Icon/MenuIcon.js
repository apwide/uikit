import IconWrapper from "./IconWrapper.vue";

export default {
  name: "MenuIcon",
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
          '<svg viewBox="0 0 24 24"><path d="M5 15h14v2H5zm0-8h14v2H5zm0 4h14v2H5z" fill="currentColor" fill-rule="evenodd"/></svg>',
      },
    });
  },
};
