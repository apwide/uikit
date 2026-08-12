// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './TextArea.story.vue';
import sourceCode from './TextArea.story.vue?raw';

export default {
  title: 'Form',
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

export const TextArea = Template.bind({});
