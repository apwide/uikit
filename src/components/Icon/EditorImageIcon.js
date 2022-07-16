import IconWrapper from "./IconWrapper.vue";

export default {
  name: "EditorImageIcon",
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
          '<svg viewBox="0 0 24 24"><path d="M11 15l-1-1-2 2h8v-1.8L14 12l-3 3zM6 6.5c0-.276.229-.5.5-.5h11c.276 0 .5.229.5.5v11c0 .276-.229.5-.5.5h-11a.504.504 0 0 1-.5-.5v-11zM9.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor" fill-rule="evenodd"/></svg>',
      },
    });
  },
};
