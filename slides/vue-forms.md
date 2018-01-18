# VueJS Introduction
<img src="./images/vue-logo.png" width="400px" /><br>
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

# Forms
> Get your user input

---

## Basic Usage

```html
<!-- text -->
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```
```html
<!-- checkbox -->
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```
```html
<!-- radio -->
<input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span>
```
```html
<!-- select -->
<select v-model="selected">
    <option v-for="option in options" :value="option.value">
        {{ option.text }}
    </option>
</select>
<span>Selected: {{ selected }}</span>
```

<small>
For form validation see: [https://github.com/logaretm/vee-validate](https://github.com/logaretm/vee-validate)
</small>

---

## Form Submit

Form with bootstrap styling

```html
<form @submit.prevent="addUser()">
  <div class="form-group">
    <label for="firstName">First Name:</label>
    <input type="text" class="form-control"
           id="firstName" v-model="user.firstName">
  </div>

  ... other

  <button type="submit" class="btn btn-default">Submit</button>
</form>
```

```js
export default {
  data() {
    user: {}
  },
  methods: {
    addUser() {
      console.log(this.user)
    }
  }
} 
```

---

## Form Validation

NOT AVAILABLE FROM VUEJS

So...

> Use [Vuelidate](https://monterail.github.io/vuelidate/)<br>Simple, lightweight model-based validation for Vue.js 2.0


