# Focus Within for PostCSS [<img src="http://jonathantneal.github.io/postcss-logo.svg" alt="" width="90" height="90" align="right">][Focus Within]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[Focus Within] lets you style elements based on whether they are focused or
contain a focused element, following the [Selectors Level 4] specification.

```css
.field:focus-within label {
  font-weight: bold;
}

/* becomes */

.field[focus-within] label {
  font-weight: bold;
}

.field:focus-within label {
  font-weight: bold;
}
```

[Focus Within] duplicates rules using the `:focus-within` pseudo-class
with a `[focus-within]` attribute selector. This replacement selector can be
changed using the `replaceWith` option. Also, the preservation of the original
`:focus-within` rule can be disabled using the `preserve` option.

## Usage

Add [Focus Within] to your project:

```bash
npm install focus-within --save-dev
```

Use [Focus Within] to process your CSS:

```js
const postcssFocusWithin = require('focus-within/postcss');

postcssFocusWithin.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssFocusWithin = require('focus-within/postcss');

postcss([
  postcssFocusWithin(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

[Focus Within] runs in all Node environments, with special
instructions for:

| [Node](INSTALL-POSTCSS.md#node) | [PostCSS CLI](INSTALL-POSTCSS.md#postcss-cli) | [Webpack](INSTALL-POSTCSS.md#webpack) | [Create React App](INSTALL-POSTCSS.md#create-react-app) | [Gulp](INSTALL-POSTCSS.md#gulp) | [Grunt](INSTALL-POSTCSS.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

### preserve

The `preserve` option defines whether the original selector should remain. By
default, the original selector is preserved.

```js
focusWithin({ preserve: false });
```

```css
.my-form-field:focus-within label {
  background-color: yellow;
}

/* becomes */

.my-form-field[focus-within] label {
  background-color: yellow;
}
```

### replaceWith

The `replaceWith` option defines the selector to replace `:focus-within`. By
default, the replacement selector is `[focus-within]`.

```js
focusWithin({ replaceWith: '.focus-within' });
```

```css
.my-form-field:focus-within label {
  background-color: yellow;
}

/* becomes */

.my-form-field.focus-within label {
  background-color: yellow;
}

.my-form-field:focus-within label {
  background-color: yellow;
}
```

[cli-img]: https://img.shields.io/travis/jonathantneal/focus-within/master.svg
[cli-url]: https://travis-ci.org/jonathantneal/focus-within
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/focus-within.svg
[npm-url]: https://www.npmjs.com/package/focus-within

[Focus Within]: https://github.com/jonathantneal/focus-within
[Selectors Level 4]: https://www.w3.org/TR/selectors-4/#the-focus-within-pseudo
