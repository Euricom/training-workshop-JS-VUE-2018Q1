<template>
  <div>
    <h2>My First Component</h2>
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'hello Vue',
    };
  },
};
</script>

<style>

</style>
