// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Renderer.story.vue';

const sourceCode = require(`!!html-loader!./Renderer.story.vue`);

export default {
  title: 'InlineEdit/MultiSelect',
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

export const Renderer = Template.bind({});
