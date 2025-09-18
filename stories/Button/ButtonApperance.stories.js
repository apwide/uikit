// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './ButtonApperance.story.vue';

const sourceCode = require(`!!html-loader!./ButtonApperance.story.vue`);

export default {
  title: 'Button',
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

export const ButtonApperance = Template.bind({});
