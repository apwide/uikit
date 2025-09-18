// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './CopyToClipboard.story.vue';

const sourceCode = require(`!!html-loader!./CopyToClipboard.story.vue`);

export default {
  title: 'CopyToClipboard',
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

export const CopyToClipboard = Template.bind({});
