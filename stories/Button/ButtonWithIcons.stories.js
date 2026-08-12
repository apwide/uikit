// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './ButtonWithIcons.story.vue';
import sourceCode from './ButtonWithIcons.story.vue?raw';

export default {
  title: 'Button',
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

export const ButtonWithIcons = Template.bind({});
