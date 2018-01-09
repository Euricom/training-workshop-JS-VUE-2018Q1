import calc from './calc';

const users = [{ id: 1, name: 'Peter' }, { id: 2, name: 'Bart' }, { id: 3, name: 'Jan' }];
users.forEach(user => {
  console.log(user.name);
});

// eslint-disable-next-line
const result = calc.add(1, 4);
console.log('1 + 2 = ', result);
