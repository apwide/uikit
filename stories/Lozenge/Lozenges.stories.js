// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Lozenges.story.vue';

const sourceCode = require(`!!html-loader!./Lozenges.story.vue`);

export default {
  title: 'Lozenge',
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

export const Lozenges = Template.bind({});
