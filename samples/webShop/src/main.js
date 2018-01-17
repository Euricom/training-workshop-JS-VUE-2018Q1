import Vue from 'vue';
import App from './App.vue';

// global application filters
Vue.filter('currency', value => {
  const num = parseFloat(Math.round(value * 100) / 100).toFixed(2);
  return `€ ${num}`;
});

/* Simple Event Bus
 * use:
 *    // in component A
 *    eventBus.$emit('resourceAdded', resoure)
 * 
 *    // in component B
 *    eventBut.$on('resourceAdded', (resource) => {
 *      console.log('the resource is added', resource)
 *    })
 */
export const eventBus = new Vue();

/* The main application */
export const app = new Vue({
  el: '#app',
  render: h => h(App),
});
