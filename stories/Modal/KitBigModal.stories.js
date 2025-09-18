// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './KitBigModal.story.vue';

const sourceCode = require(`!!html-loader!./KitBigModal.story.vue`);

export default {
  title: 'Modal',
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

export const KitBigModal = Template.bind({});
