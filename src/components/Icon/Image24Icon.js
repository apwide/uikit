import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Image24Icon',
    props: {
        size: {
            type: String
        },
        primaryColor: {
            type: String
        },
        secondaryColor: {
            type: String
        }
    },
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, {
            props: { ...this.$props },
            domProps: {
                innerHTML:
                    '<svg viewBox="0 0 24 24"><path fill="#FFAB00" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm7 17l-1.293-1.293a1 1 0 0 0-1.414 0L4 19h16v-3.6l-3.295-3.624a1 1 0 0 0-1.447-.034L10 17zm-3.333-6.667a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333z"/></svg>'
            }
        });
    }
};
