// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './MarkdownEditableRenderer.story.vue';

const sourceCode = require(`!!html-loader!./MarkdownEditableRenderer.story.vue`);

export default {
  title: 'InlineEdit/MarkdownEditor',
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

export const MarkdownEditableRenderer = Template.bind({});
