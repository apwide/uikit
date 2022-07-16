import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EditorAlignImageLeftIcon',
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
                    '<svg width="24" height="24"><path d="M6 17h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm0-8h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0-4h12a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2z" fill="currentColor" fill-rule="evenodd"/></svg>'
            }
        });
    }
};
