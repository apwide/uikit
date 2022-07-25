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
