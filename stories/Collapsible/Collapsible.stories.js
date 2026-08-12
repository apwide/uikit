// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Collapsible.story.vue';
import sourceCode from './Collapsible.story.vue?raw';

export default {
  title: 'Collapsible',
  component: Comp,
  parameters: {
    docs: {
      source: {
        code: sourceCode
      }
    }
  }
};

const Template = (args) => ({
  components: { Comp },
  setup() {
    return { args };
  },
  template: '<Comp v-bind="args" />'
});

export const Collapsible = Template.bind({});
