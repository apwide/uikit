// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Input.story.vue';

const sourceCode = require(`!!html-loader!./Input.story.vue`);

export default {
  title: 'Form',
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

export const Input = Template.bind({});
