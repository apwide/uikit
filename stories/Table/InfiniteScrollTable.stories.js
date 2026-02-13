// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './InfiniteScrollTable.story.vue';
import sourceCode from './InfiniteScrollTable.story.vue?raw';

export default {
  title: 'Table',
  component: Comp,
  parameters: {
    docs: {
      source: {
        code: sourceCode
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

export const InfiniteScrollTable = Template.bind({});
