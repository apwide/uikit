// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './ModalBasicPending.story.vue';

const sourceCode = require(`!!html-loader!./ModalBasicPending.story.vue`);

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

export const ModalBasicPending = Template.bind({});
