// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './ProgressBar.story.vue';

const sourceCode = require(`!!html-loader!./ProgressBar.story.vue`);

export default {
  title: 'ProgressBar',
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

export const ProgressBar = Template.bind({});
