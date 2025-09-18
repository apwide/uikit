// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './EnrichedRenderer.story.vue';

const sourceCode = require(`!!html-loader!./EnrichedRenderer.story.vue`);

export default {
  title: 'InlineEdit/User',
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

export const EnrichedRenderer = Template.bind({});
