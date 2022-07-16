import IconWrapper from "./IconWrapper.vue";

export default {
  name: "LabelIcon",
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
          '<svg viewBox="0 0 24 24"><path d="M11.433 5.428l-4.207.6A2 2 0 0 0 5.53 7.727l-.6 4.207a1 1 0 0 0 .281.849l6.895 6.894a.999.999 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0 0-1.414L12.282 5.71a.998.998 0 0 0-.849-.283m-.647 5.858A1.666 1.666 0 1 1 8.43 8.929a1.666 1.666 0 0 1 2.357 2.357" fill="currentColor" fill-rule="evenodd"/></svg>',
      },
    });
  },
};
