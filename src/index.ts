import * as components from './components/components';

// @ts-ignore
components.install = (Vue, locale) => {
    for (const i in components) {
        // @ts-ignore
        Vue.component(i, components[i]);
    }
};

export default components;
