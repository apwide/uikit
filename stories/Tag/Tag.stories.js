// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Tag.story.vue';

const sourceCode = require(`!!html-loader!./Tag.story.vue`);

export default {
  title: 'Tag',
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

export const Tag = Template.bind({});
