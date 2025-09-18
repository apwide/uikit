// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './TreeSelect.story.vue';

const sourceCode = require(`!!html-loader!./TreeSelect.story.vue`);

export default {
  title: 'Tree',
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

export const TreeSelect = Template.bind({});
