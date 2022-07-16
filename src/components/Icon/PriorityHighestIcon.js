import IconWrapper from './IconWrapper.vue';

export default {
    name: 'PriorityHighestIcon',
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
                    '<svg viewBox="0 0 24 24"><path d="M12.005 8.187l-6.453 3.865a1 1 0 0 1-1.028-1.716l6.97-4.174a1 1 0 0 1 1.031.002l6.906 4.174a1 1 0 1 1-1.035 1.712l-6.39-3.863z" fill="#FF5630"/><path d="M5.552 18.054a1 1 0 1 1-1.028-1.715l6.97-4.174a1 1 0 0 1 1.031.002l6.906 4.174a1 1 0 1 1-1.035 1.711l-6.39-3.862-6.454 3.864z" fill="#FF7452"/></svg>'
            }
        });
    }
};
