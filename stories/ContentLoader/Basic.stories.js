// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Basic.story.vue';
import sourceCode from './Basic.story.vue?raw';

export default {
  title: 'ContentLoader',
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

export const Basic = Template.bind({});
