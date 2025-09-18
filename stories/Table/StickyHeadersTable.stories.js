// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './StickyHeadersTable.story.vue';

const sourceCode = require(`!!html-loader!./StickyHeadersTable.story.vue`);

export default {
  title: 'Table',
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

export const StickyHeadersTable = Template.bind({});
