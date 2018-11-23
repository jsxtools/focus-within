# Focus Within [<img src="http://jonathantneal.github.io/js-logo.svg" alt="" width="90" height="90" align="right">][Focus Within]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[Focus Within] lets you style elements when they are focused or contain a
focused element, following the [Selectors Level 4] specification.

```css
.field label {
  /* style a label */
}

.field:focus-within label {
  /* style a label when its field also contains a focused element */
}
```

## Usage

From the command line, transform CSS files that use `:focus-within` selectors:

```bash
npx focus-within SOURCE.css TRANSFORMED.css
```

Next, use your transformed CSS with this script:

```html
<link rel="stylesheet" href="TRANSFORMED.css">
<script src="https://unpkg.com/focus-within/browser"></script>
<script>focusWithin(document)</script>
```

That’s it. The script is 379 bytes and works in all browsers, including
Internet Explorer 9.

## How it works

The [PostCSS plugin](README-POSTCSS.md) duplicates rules containing
`:focus-within`, replacing them with an alternative `[focus-within]` selector.

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

Next, the [JavaScript library](README-BROWSER.md) adds a `focus-within`
attribute to elements otherwise matching `:focus-within` natively.

```html
<html focus-within>
  <body focus-within>
    <form focus-within>
      <div class="field" focus-within>
        <label for="a">Field</label>
        <input id="a" value="This element is focused" focus-within>
      </div>
      <div class="field">
        <label for="b">Field</label>
        <input id="b" value="This element is not focused">
      </div>
    </form>
    <p>Some sibling text element.</p>
  </body>
</html>
```

> **GOTCHA!**
>
> One cannot simply add the `[focus-within]` selector to an existing rule:
> ```css
> .field:focus-within label, .field[focus-within] label {}
> ```
> Browsers that don't support `:focus-within` will throw the entire rule away!
> This is why you should follow the [Usage](#usage) instructions.

[cli-img]: https://img.shields.io/travis/jonathantneal/focus-within/master.svg
[cli-url]: https://travis-ci.org/jonathantneal/focus-within
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/focus-within.svg
[npm-url]: https://www.npmjs.com/package/focus-within

[Focus Within]: https://github.com/jonathantneal/focus-within
[PostCSS Preset Env]: https://preset-env.cssdb.org/
[Selectors Level 4]: https://www.w3.org/TR/selectors-4/#the-focus-within-pseudo
