import Vue, { VNode } from 'vue';
import { CreateElement, RenderContext } from 'vue/types/umd';

export default Vue.extend({
    name: 'TabHeader',
    props: {
        id: {
            type: [String, Number],
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        stretch: {
            type: Boolean,
            default: false
        },
        inactive: {
            type: Boolean,
            default: false
        }
    },
    render(_createElement: CreateElement, _h: RenderContext) {
        return this.$slots.default!.filter((vnode: VNode) => vnode.tag !== undefined)[0]!;
    }
});
