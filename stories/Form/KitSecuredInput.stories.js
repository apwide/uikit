// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './KitSecuredInput.story.vue';

const sourceCode = require(`!!html-loader!./KitSecuredInput.story.vue`);

export default {
  title: 'Form',
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

export const KitSecuredInput = Template.bind({});
