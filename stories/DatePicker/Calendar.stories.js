// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Calendar.story.vue';
import sourceCode from './Calendar.story.vue?raw';

export default {
  title: 'DatePicker',
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

export const Calendar = Template.bind({});
