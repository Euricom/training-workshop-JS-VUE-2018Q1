// start any file with iffe and 'use strict'
(function() {
  'use strict';

  const users = [{ id: 1, name: 'Peter' }, { id: 2, name: 'Bart' }, { id: 3, name: 'Jan' }];
  users.forEach(user => {
    console.log(user.name);
  });

  // don't forget to define custom globals in eslint
  const result = calc.add(1, 2);
  console.log('1 + 2 = ', result);
})();
