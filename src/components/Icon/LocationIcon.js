import IconWrapper from "./IconWrapper.vue";

export default {
  name: "LocationIcon",
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
          '<svg viewBox="0 0 24 24"><path d="M12 21c-2.28 0-6-8.686-6-12a6 6 0 1 1 12 0c0 3.314-3.72 12-6 12zm0-9a2.912 2.912 0 1 0 0-5.824A2.912 2.912 0 0 0 12 12z" fill="currentColor" fill-rule="evenodd"/></svg>',
      },
    });
  },
};
