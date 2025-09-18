// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './CheckboxBasic.story.vue';

const sourceCode = require(`!!html-loader!./CheckboxBasic.story.vue`);

export default {
  title: 'Checkbox',
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

export const CheckboxBasic = Template.bind({});
