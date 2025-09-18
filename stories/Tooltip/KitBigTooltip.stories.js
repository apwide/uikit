// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './KitBigTooltip.story.vue';

const sourceCode = require(`!!html-loader!./KitBigTooltip.story.vue`);

export default {
  title: 'Tooltip',
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

export const KitBigTooltip = Template.bind({});
