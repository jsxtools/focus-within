# Focus Within [<img src="http://jonathantneal.github.io/dom-logo.svg" alt="dom logo" width="90" height="90" align="right">][Focus Within]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]

[Focus Within] lets you target elements based on whether an element is focused
or contains a focused element, following the [Selectors Level 4 specification].

[Focus Within] adds a `focus-within` attribute to any element that is focused
or contains a focused element.

This can be used to style components specifically if focus is triggered within:

```js
.my-form-field[focus-within] label {
  background-color: yellow;
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
class name added to elements matching `:focus-within`.

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
