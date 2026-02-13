// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './SimpleTable.story.vue';
import sourceCode from './SimpleTable.story.vue?raw';

export default {
  title: 'Table',
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

export const SimpleTable = Template.bind({});
