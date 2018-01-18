# VueJS - 3th Party
<img src="./images/components.jpg" width="400px" /><br>
<small>by Peter Cosemans</small>
<br>
<br>
<small>
Copyright (c) 2018 Euricom nv. Licensed under the [MIT license](https://opensource.org/licenses/MIT).
</small>

<style type="text/css">
.reveal pre code {
    display: block;
    padding: 5px;
    overflow: auto;
    max-height: 800px;
    word-wrap: normal;
}
</style>

---

# 3th Party Libraries
> Don't build it all yourself

----

##  Usefull components

#### UI Toolkits
- [iView](https://www.iviewui.com/)
- [Element](http://element.eleme.io/#/en-US)
- [Quasar (Mobile)](http://quasar-framework.org/)
<br><br>
#### Utilities
-  [vue-i18n](https://kazupon.github.io/vue-i18n/en/)
- [vuejs-storage](https://github.com/maple3142/vuejs-storage)
- [vue-cookie](https://github.com/alfhen/vue-cookie)
- ...

See Also

[Awesome VueJS](https://github.com/vuejs/awesome-vue) and 
[Curated](https://curated.vuejs.org)

---

# iView
> A high quality UI Toolkit based on Vue.js

----

## Install

CDN

```html
<script src="//vuejs.org/js/vue.min.js"></script>
<link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">
<script src="//unpkg.com/iview/dist/iview.min.js"></script>
```

ES Modules (preferred)

```bash
$ npm install iview
```

---

## Use

Init

```js
// main.js
import Vue from 'vue';
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';

// import css
import 'iview/dist/styles/iview.css';

Vue.use(iView, { locale });
```

app.vue

```html
<template>
  <div id="app">
    <Button type="primary" @click="show">Click me!</Button>
    <Modal v-model="visible" title="Welcome">Welcome to iView</Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
  },
};
</script>
```
