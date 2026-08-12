// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Toggle.story.vue';
import sourceCode from './Toggle.story.vue?raw';

export default {
  title: 'Toggle',
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

export const Toggle = Template.bind({});
