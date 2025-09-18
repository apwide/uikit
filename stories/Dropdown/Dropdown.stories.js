// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Dropdown.story.vue';

const sourceCode = require(`!!html-loader!./Dropdown.story.vue`);

export default {
  title: 'Dropdown',
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

export const Dropdown = Template.bind({});
