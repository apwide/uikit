// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './TextAreaEditableRenderer.story.vue';

const sourceCode = require(`!!html-loader!./TextAreaEditableRenderer.story.vue`);

export default {
  title: 'InlineEdit/TextArea',
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

export const TextAreaEditableRenderer = Template.bind({});
