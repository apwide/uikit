// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './MarkdownEditor.story.vue';

const sourceCode = require(`!!html-loader!./MarkdownEditor.story.vue`);

export default {
  title: 'MarkdownEditor',
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

export const MarkdownEditor = Template.bind({});
