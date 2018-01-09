/* eslint-disable no-unused-vars */
const calc = (function() {
  'use strict';

  function add(x, y) {
    return x + y;
  }

  function substract(x, y) {
    return x - y;
  }

  return {
    add,
    substract,
  };
})();
