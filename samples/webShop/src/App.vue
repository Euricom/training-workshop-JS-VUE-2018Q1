<template>
  <div id="app" class="container-fluid">
    <h1>Peter's Web Shop</h1>
    <div class="row">
      <div class="col-md-8">
        <products></products>
      </div>
      <div class="col-md-4">
        <basket></basket>
      </div>
    </div>
  </div>
</template>

<script>
// you can import css with webpack
import 'bootstrap/dist/css/bootstrap.css';
import Products from './components/products.vue';
import Basket from './components/basket.vue';

export default {
  name: 'app',
  components: {
    Products,
    Basket,
  },
};
</script>

<style>

</style>
