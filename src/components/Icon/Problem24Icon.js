import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Problem24Icon',
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
                    '<svg viewBox="0 0 24 24"><path fill="#FF5630" fill-rule="evenodd" d="M7.654 17.488l9.834-9.834a7 7 0 0 1-9.834 9.834zM6.28 16.035a7 7 0 0 1 9.756-9.756L6.28 16.035zM3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm9 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/></svg>'
            }
        });
    }
};
