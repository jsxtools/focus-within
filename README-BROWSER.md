# Focus Within for Browsers [<img src="http://jonathantneal.github.io/js-logo.svg" alt="" width="90" height="90" align="right">][Focus Within]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[Focus Within] lets you style elements based on whether they are focused or
contain a focused element, following the [Selectors Level 4] specification.

```css
.field label {
  /* style a label */
}

.field[focus-within] label {
  /* style a label when its field also contains a focused element */
}
```

## Usage

Add [Focus Within] to your build tool:

```bash
npm install focus-within
```

Then include and initialize it on your document:

```js
const focusWithin = require('focus-within');

focusWithin(document);
```

## Options

[Focus Within] accepts a secondary paramater to configure the attribute or
class name added to elements matching focused elements or containing focused
elements.

```js
focusWithin(document, {
  attr: false,
  className: '.focus-within'
});
```

Falsey values on either `attr` or `className` will disable setting the
attribute or class name on elements matching `:focus-within`.

[Focus Within] also accepts a secondary paramater to configure whether the
polyfill is loaded regardless of support. If `force` is given a truthy value,
then the polyfill will always execute.

```js
focusWithin(document, {
  force: true
});
```

[cli-img]: https://img.shields.io/travis/jonathantneal/focus-within/master.svg
[cli-url]: https://travis-ci.org/jonathantneal/focus-within
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/focus-within.svg
[npm-url]: https://www.npmjs.com/package/focus-within

[Focus Within]: https://github.com/jonathantneal/focus-within
[Selectors Level 4]: https://www.w3.org/TR/selectors-4/#the-focus-within-pseudo
