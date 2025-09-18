// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Flag.story.vue';

const sourceCode = require(`!!html-loader!./Flag.story.vue`);

export default {
  title: 'Flag',
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

export const Flag = Template.bind({});
