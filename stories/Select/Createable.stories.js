// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Createable.story.vue';

const sourceCode = require(`!!html-loader!./Createable.story.vue`);

export default {
  title: 'Select',
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

export const Createable = Template.bind({});
