// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './ErrorManagement.story.vue';

const sourceCode = require(`!!html-loader!./ErrorManagement.story.vue`);

export default {
  title: 'InlineEdit',
  component: Comp,
  parameters: {
    docs: {
      source: {
        code: `${sourceCode}`
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

export const ErrorManagement = Template.bind({});
