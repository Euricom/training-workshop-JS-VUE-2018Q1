<template>
  <div class="alert alert-dismissible" :class="alertClassName" role="alert">
    <button v-if="_events.closed" type="button" class="close" @click="onClose()">
      <span aria-hidden="true">&times;</span>
    </button>
    <slot></slot>
  </div>
</template>

<script>
const alertTypes = {
  success: 'alert-success',
  info: 'alert-info',
  warn: 'alert-warning',
  error: 'alert-danger',
};
export default {
  name: 'alert',
  props: ['type'],
  data() {
    return {
      alertClassName: '',
    };
  },
  created() {
    this.alertClassName = alertTypes[this.type];
    if (!this.alertClassName) {
      this.alertClassName = alertTypes.warn;
    }
  },
  methods: {
    onClose() {
      this.$emit('closed');
    },
  },
};
</script>
