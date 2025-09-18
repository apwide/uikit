// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './EditableRenderer.story.vue';

const sourceCode = require(`!!html-loader!./EditableRenderer.story.vue`);

export default {
  title: 'InlineEdit/SecuredStringLine',
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

export const EditableRenderer = Template.bind({});
