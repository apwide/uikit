// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './SingleSelect.story.vue';

const sourceCode = require(`!!html-loader!./SingleSelect.story.vue`);

export default {
  title: 'Select',
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

export const SingleSelect = Template.bind({});
