// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './DetailsLoader.story.vue';

const sourceCode = require(`!!html-loader!./DetailsLoader.story.vue`);

export default {
  title: 'ContentLoader',
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

export const DetailsLoader = Template.bind({});
