// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './TransitionExpand.story.vue';

const sourceCode = require(`!!html-loader!./TransitionExpand.story.vue`);

export default {
  title: 'TransitionExpand',
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

export const TransitionExpand = Template.bind({});
