// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Spinner.story.vue';

const sourceCode = require(`!!html-loader!./Spinner.story.vue`);

export default {
  title: 'Spinner',
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

export const Spinner = Template.bind({});
