# Focus Within [<img src="http://jonathantneal.github.io/dom-logo.svg" alt="dom logo" width="90" height="90" align="right">][Focus Within]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]

[Focus Within] lets you target elements based on whether they are focused or
contain a focused element, following the [Selectors Level 4] specification.

```css
.form-field label {
  /* style a label */
}

.form-field:focus-within label {
  /* style a label differently when .form-field contains a focused input */
}
```

[Focus Within] is the companion to [PostCSS Focus Within], which is also
included [PostCSS Preset Env].

In unsupported browsers, the [Focus Within] polyfill adds a `focus-within`
attribute to elements otherwise matching `:focus-within` natively.
[PostCSS Focus Within] will duplicate these rules for you. Otherwise, be sure
to either duplicate the entire rule, or use the [force option](#options).

```css
.form-field label {
  /* style a label */
}

.form-field[focus-within] label {
  /* style a label differently when .form-field contains a focused input */
}

.form-field:focus-within label {
  /* style a label differently when .form-field contains a focused input */
}
```


The script, including the test and polyfill minify to 434 bytes gzipped or less.

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

[npm-url]: https://www.npmjs.com/package/focus-within
[npm-img]: https://img.shields.io/npm/v/focus-within.svg
[cli-url]: https://travis-ci.org/jonathantneal/focus-within
[cli-img]: https://img.shields.io/travis/jonathantneal/focus-within.svg

[Focus Within]: https://github.com/jonathantneal/focus-within
[PostCSS Focus Within]: https://github.com/jonathantneal/postcss-focus-within
[PostCSS Preset Env]: https://preset-env.cssdb.org/
[Selectors Level 4]: https://www.w3.org/TR/selectors-4/#the-focus-within-pseudo
