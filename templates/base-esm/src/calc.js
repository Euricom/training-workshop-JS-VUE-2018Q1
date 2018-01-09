// named export 'add'
export function add(x, y) {
  return x + y;
}

// named export 'substract'
export function substract(x, y) {
  return x - y;
}

// default (none named) export
// you can only have one default export
export default {
  add,
  substract,
};
