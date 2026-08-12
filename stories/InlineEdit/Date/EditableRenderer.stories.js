// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './EditableRenderer.story.vue';
import sourceCode from './EditableRenderer.story.vue?raw';

export default {
  title: 'InlineEdit/Date',
  component: Comp,
  parameters: {
    docs: {
      source: {
        code: sourceCode
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
