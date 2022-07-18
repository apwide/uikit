import Vue, { RenderContext } from 'vue';
import { CreateElement, VNode } from 'vue/types/umd';

export default Vue.extend({
    name: 'TabContent',
    props: {
        id: {
            type: [String, Number],
            required: true
        }
    },
    render(_createElement: CreateElement, _h: RenderContext) {
        return this.$slots.default!.filter((vnode: VNode) => vnode.tag !== undefined)[0]!;
    }
});
