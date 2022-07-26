# @apwide/uikit

> Apwide's ui component, loosely built according to the Atlassian Design Guidelines on top of @apwide/uikit.

## Installation
```
npm install @apwide/uikit
```

### ES6
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

Pushing to `main`:

- releases the current version to NPM
- generates the docs site

Currently, the version is not updated automatically.

## Developing this library

If you need to work on a project with an unreleased version of this library:

1. in this project directory: `<npm|yarn> link`
2. in the other project's directory: `<npm|yarn> link @apwide/uikit`

To stop, make sure to unlink `<npm|yarn> unlink @apwide/uikit` and read to output for further actions to perform.
