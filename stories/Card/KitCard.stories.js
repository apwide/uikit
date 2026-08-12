// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './KitCard.story.vue';
import sourceCode from './KitCard.story.vue?raw';

export default {
  title: 'Card',
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

export const KitCard = Template.bind({});
