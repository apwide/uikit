// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Breadcrumbs.story.vue';

const sourceCode = require(`!!html-loader!./Breadcrumbs.story.vue`);

export default {
  title: 'Breadcrumbs',
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

export const Breadcrumbs = Template.bind({});
