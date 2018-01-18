# VueJS Components
<img src="./images/vue-file.png" width="300px" /><br>
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

# Components

> The power of VueJS

----

## What are components

In a large application, it is necessary to divide the whole app into components to make development manageable.  So a component is a re-usable UI components.

```html
<div id="app">
  <app-nav></app-nav>
  <app-layout>
    <app-sidebar></app-sidebar>
    <app-content>
      ...
    </app-content>
  </app-layout>
</div>
```

> It's like extending your html

----

## How to create

myComponent.vue

```html
<template>
  <div>
    <h2>My Component</h2></H2>
  </div>
</template>
<script>
export default {
  // ...
}
</script>
```

app.vue

```html
<template>
  <my-comp></my-comp>
</template>
<script>
import MyComp from './myComponent.vue'
export default {
  components: {
    // list the components used in this component
    MyComp,
  },
  data () {
    ...
  }
}
</script>
```

Note: Notice the CamelCase to kebab-case translation

----

## Slots

Slots are used to pass all the inner content (like inner html).

myComponent.vue

```html
<template>
  <div>
    <h1>{{title}}</h1>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    ...
  }
</script>
```

And use it

```html
<div id="root">
  <my-comp>
    <span>Add some text here</span>
  </my-comp>
</div>
```

----

## Custom attributes: props

I want to set my title on the component

```html
<div id="app">
  <my-comp title="My Component Title" number="5">
    <span> Add some text here </span>
  </my-comp>
</div>
```

In code (props becomes available in template)

```html
<template>
  <div>
    <h1>{{title}}</h1>
    <h3>{{number}}</h3>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    number: String
  },
  data() {
    ...
  }
}
</script>
```

More https://vuejs.org/v2/guide/components.html#Prop-Validation

----

## Dynamic props

You can access the with the v-bind (:title) syntax.

```html
<my-component :title="title" :number="number">
    <span> Add some text here </span>
</my-component>
```

----

## Custom events

```html
<template>
  <div>
      <h1>My Super Button</h1>
      <button @click="onClick()">Finish</button>
  </div>
</template>
<script>
export {
  data() {
  },
  methods: {
    onClick() {
        this.$emit('handled', { id: 123 })
    }
}
</script>
```

```html
<div id="root">
  <my-component @handled="onHandled($event)">
  </my-component>
</div>
```

---

# Exercise

> Create dismissible bootstrap alert

- Use bootstrap styling: http://getbootstrap.com/components/#alerts-dismissible
- Create VueJS component

```html
    <!-- default alert: warning -->
    <alert>
        Almost out of stock
    </alert>

    <!-- custom alert with event -->
    <alert type="alert" @closed="onClosed()">
        <strong>Alert!</strong> We have a problem.
    </alert>
```

- Don't use jqeury or the bootstrap js library
- Log a message to the console if the dialog is closed
- Provide a way to open the alert message again

---
