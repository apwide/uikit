// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Badge.story.vue';

const sourceCode = require(`!!html-loader!./Badge.story.vue`);

export default {
  title: 'Badge',
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

export const Badge = Template.bind({});
