// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Progress.story.vue';

const sourceCode = require(`!!html-loader!./Progress.story.vue`);

export default {
  title: 'Progress',
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

export const Progress = Template.bind({});
