// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './DetailsLoader.story.vue';
import sourceCode from './DetailsLoader.story.vue?raw';

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

export const DetailsLoader = Template.bind({});
