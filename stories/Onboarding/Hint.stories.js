// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Hint.story.vue';

const sourceCode = require(`!!html-loader!./Hint.story.vue`);

export default {
  title: 'Onboarding',
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

export const Hint = Template.bind({});
