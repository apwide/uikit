// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './ColorPicker.story.vue';

const sourceCode = require(`!!html-loader!./ColorPicker.story.vue`);

export default {
  title: 'ColorPicker',
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

export const ColorPicker = Template.bind({});
