// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './CustomIcon.story.vue';

const sourceCode = require(`!!html-loader!./CustomIcon.story.vue`);

export default {
  title: 'Icons',
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

export const CustomIcon = Template.bind({});
