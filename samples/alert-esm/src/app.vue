<template>
  <div class="container" v-cloak>
    <h1>{{message}}</h1>

    <!-- exercise: toggle text -->

    <p :class="{ hidden: !showText }">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
    </p>
    <p v-if="showText">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
    </p>
    <p :hidden="!showText">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
    </p>
    <br>
    <br>
    <button @click="onToggle()">Toggle Text</button>
    <button @click="showText = !showText">Alternative Toggle Text</button>

    <hr>

    <!-- exercise: alert box -->

    <alert type="info">
      You are doing good
    </alert>
    <alert v-if="alertMessage" @closed="onClosed()">
      {{alertMessage}}
    </alert>
    <button v-if="!alertMessage" @click="onShowAlert()">Show Alert Again</button>

    <hr>

  </div>
</template>

<script>
import Alert from './components/alert.vue';

export default {
  name: 'app',
  components: {
    Alert,
  },
  data() {
    return {
      alertMessage: 'Alert: We have a problem.',
      message: 'Hello Vue',
      showText: true,
    };
  },
  methods: {
    onToggle() {
      this.showText = !this.showText;
    },
    onClosed() {
      this.alertMessage = '';
    },
    onShowAlert() {
      this.alertMessage = 'Wooh, yet another problem occured. Help!';
    },
  },
};
</script>

<style>
.hidden {
  display: none;
}
</style>
