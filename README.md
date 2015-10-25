# vc-toptip
[![NPM version](https://img.shields.io/npm/v/runfile.svg?style=flat-square)](https://www.npmjs.com/package/vc-toptip)
[![NPM download](https://img.shields.io/npm/dm/runfile.svg?style=flat-square)](https://www.npmjs.com/package/vc-toptip)

A simple toptip Vue (`v1.0.0+`) component

## Install

```bash
$ npm install vc-toptip
```
or use `dist/vc-toptip.dist.js` directly.

## Usage

[Example](https://github.com/vue-component/vc-toptip/blob/master/test/index.html)

```javascript
Vue.use(require('vc-toptip'))
require('vc-toptip/src/vc-toptip.scss') // or link the stylesheet manually if you are not using webpack
```

You can use `<vc-toptip></vc-toptip>` now in your view.

Then show a tip: 

```javascript
vm.$broadcast('showTip', {
  status: 'error',
  content: 'something wrong happend',
  duration: 3000 // optional, default is 2000
})
```

### Custom

You can custom the style of toptip, only need to write an overwritten style:

```scss
#vc-toptip{
  padding-left: 1em;
  padding-right: 1em;
  &.error{
    border-bottom: 1px solid #ebccd1;
    color: #a94442;
    background-color: #f2dede;
  }

  &.warning{
    border-bottom: 1px solid #faebcc;
    color: #8a6d3b;
    background-color: #fcf8e3;
  }

  &.success{
    border-bottom: 1px solid #d6e9c6;
    color: #3c763d;
    background-color: #dff0d8;
  }
}
```
One `status` corresponding one class，so you could extend the status style easily.

## License

MIT License