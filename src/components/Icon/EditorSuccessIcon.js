import IconWrapper from "./IconWrapper.vue";

export default {
  name: "EditorSuccessIcon",
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
          '<svg viewBox="0 0 24 24"><path d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1.364-10.964l-2.152 4.11-1.543-1.39a1 1 0 1 0-1.338 1.487l2.5 2.25a1 1 0 0 0 1.555-.279l2.75-5.25a1 1 0 0 0-1.772-.928z" fill="currentColor" fill-rule="evenodd"/></svg>',
      },
    });
  },
};
