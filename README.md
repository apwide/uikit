# @apwide/uikit

> Apwide's ui component, loosely built according to the Atlassian Design Guidelines on top of @apwide/uikit.

## Installation
```
npm install @apwide/uikit
```

### how to use
```js
//
// Register a component manually for optimal tree shaking
//
import { Spinner } from '@apwide/uikit';

export default {
  components: {
    Spinner
  },
};
```

You must import it to your webpack entry point file. This is _usually_ your `main.js` file.

```js
import '@apwide/uikit/dist/bundle.css';
```

## Automation

Pushing or merging to the `main` branch (aka normal development):

1. runs the tests
2. updates the minor version in package.json
3. releases the new version to NPM
4. generates the docs site
5. deploys the docs to gh-pages

Pushing to a `patch` branch (aka production patch)

Same things happen except it increment by patch level.

If a major bump is required, the work BREAKING must be in a git commit (on `main`)

## Developing this library

If you need to work on a project with an unreleased version of this library:

1. in this project directory: `<npm|yarn> link`
2. in the other project's directory: `<npm|yarn> link @apwide/uikit`

To stop, make sure to unlink `<npm|yarn> unlink @apwide/uikit` and read to output for further actions to perform on your project.

### Storybook

If you use Node >16 make sure to add `export NODE_OPTIONS=--openssl-legacy-provider` before running storybook  (`npm run storybook`). 
