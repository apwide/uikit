import IconWrapper from "./IconWrapper.vue";

export default {
  name: "MediaServicesGridIcon",
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
          '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></g></svg>',
      },
    });
  },
};
