const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('./stories/**/*.story.vue');

files.forEach(file => {
  const relative = path.relative('./stories', file);
  const parts = relative.split(path.sep);

  const filename = parts.pop();
  const name = filename.replace(/\.story\.vue$/, '');
  const group = parts.join('/');
  // const title = group ? `${group}/${name}` : name;
  const title = group || name;
  const outFile = path.join(path.dirname(file), `${name}.stories.js`);

  const content = `
// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './${name}.story.vue';
import sourceCode from './${name}.story.vue?raw';

export default {
  title: '${title}',
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

export const ${name} = Template.bind({});
`;

  fs.writeFileSync(outFile, content.trimStart(), 'utf8');
});
