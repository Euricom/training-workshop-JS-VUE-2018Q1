/* eslint-disable no-new */

(function() {
  'use strict';

  new Vue({
    el: '#app',
    data() {
      return {
        alertMessage: 'Alert: We have a problem.',
        message: 'Hello World',
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
        this.alertMessage = 'Yet, another problem occured, Help!';
      },
    },
  });
})();
