// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './KitSectionMessage.story.vue';

const sourceCode = require(`!!html-loader!./KitSectionMessage.story.vue`);

export default {
  title: 'SectionMessage',
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

export const KitSectionMessage = Template.bind({});
