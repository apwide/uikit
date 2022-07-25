import { shallowMount } from '@vue/test-utils';
import TextArea from '../../../src/components/Form/TextArea';

const propsData = {
    value: 'ABC', maxlength: 5, rows: '10', placeholder: 'Placeholder'
};

describe('TextArea', () => {
    it('contains properly configured textarea', () => {
        const component = shallowMount(TextArea, { propsData });

        expect(component.find('textarea').attributes()).toEqual({
            auto: 'true',
            maxlength: '5',
            placeholder: 'Placeholder',
            rows: '10',
            style: 'height: auto; width: 100%; max-height: auto;'
        });
    });

    it('emits focus event on textarea focus', () => {
        const component = shallowMount(TextArea, { propsData });
        component.find('textarea').trigger('focus');
        expect(component.emitted('focus')).toBeTruthy();
    });

    it('emits blur event on textarea blur', () => {
        const component = shallowMount(TextArea, { propsData });
        component.find('textarea').trigger('blur');
        expect(component.emitted('blur')).toBeTruthy();
    });
});
