// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './TimePicker.story.vue';

const sourceCode = require(`!!html-loader!./TimePicker.story.vue`);

export default {
  title: 'DatePicker',
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

export const TimePicker = Template.bind({});
