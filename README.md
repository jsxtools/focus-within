# Focus Within [<img src="http://jonathantneal.github.io/dom-logo.svg" alt="dom logo" width="90" height="90" align="right">][Focus Within]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]

[Focus Within] lets target elements based on whether they are focused or contain
a focused element, following the [Selectors Level 4 specification].

[Focus Within] polyfills this behavior by adding a `focus-within` attribute to
elements matching `:focus-within`.

```css
.form-field label {
  /* style a label */
}

.form-field[focus-within] label {
  /* style a label differently when .form-field contains a focused input */
}
```

## Usage

Add [Focus Within] to your build tool:

```bash
npm install focus-within
```

Activate [Focus Within] on the `document`:

```js
import focusWithin from 'focus-within';

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
})
```

Falsey values on either `attr` or `className` will disable setting the
attribute or class name on elements matching `:focus-within`.

[npm-url]: https://www.npmjs.com/package/focus-within
[npm-img]: https://img.shields.io/npm/v/focus-within.svg
[cli-url]: https://travis-ci.org/jonathantneal/focus-within
[cli-img]: https://img.shields.io/travis/jonathantneal/focus-within.svg

[Focus Within]: https://github.com/jonathantneal/focus-within
[Selectors Level 4 specification]: https://www.w3.org/TR/selectors-4/#the-focus-within-pseudo
