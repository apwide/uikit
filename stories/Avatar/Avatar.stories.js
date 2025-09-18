// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Avatar.story.vue';

const sourceCode = require(`!!html-loader!./Avatar.story.vue`);

export default {
  title: 'Avatar',
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

export const Avatar = Template.bind({});
