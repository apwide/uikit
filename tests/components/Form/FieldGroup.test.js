import { shallowMount } from '@vue/test-utils';
import KitFieldGroup from '@components/Form/KitFieldGroup.vue';


describe('FieldGroup', () => {
    it('renders error messages', () => {
        const component = shallowMount(KitFieldGroup, { propsData: { errors: ['Too short!'] } });
        expect(component.findComponent({ ref: 'error' }).text()).toBe('Too short!');
    });
});
