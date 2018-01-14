# Know your javascript
<small>by Peter Cosemans</small>
<br>
<br>
<small>
Copyright (c) 2018 Euricom nv. Licensed under the [MIT license](https://opensource.org/licenses/MIT).
</small>

<style type="text/css">
.reveal pre code {
    display: block;
    padding: 5px;
    overflow: auto;
    max-height: 800px;
    word-wrap: normal;
}
</style>

---

# Learn Javascript

<img src="./images/js-books.jpg" width="400px" /><br>

> https://github.com/getify/You-Dont-Know-JS

---

# JavaScript Versions

- JavaScript
- ECMAScript
- ECMAScript 5 (ES5) - 2009
- ECMAScript 6 (ES6/ES2015) - 2015
- ECMAScript 2016 (ES7) - 2016
- ECMAScript 2017 - 2017
- ES.Next

Note:
- ECMAScript: A language standardized by ECMA International.
- JavaScript: The commonly used name for implementations of the ECMAScript standard
- ECMAScript 5 (ES5): The 5th edition of ECMAScript, standardized in 2009
- ECMAScript 6 (ES6/ES2015): The 6th edition of ECMAScript, standardized in 2015.
- ECMAScript 2016: The 7th edition of ECMAScript

----

## ES6+ Today

<img src="./images/compatibility-table.png" width="1000px" /><br>

- Edge, Chrome, Firefox and Safari: +97%
- Node 8.x: +98%

> [http://kangax.github.io/compat-table/es6/](http://kangax.github.io/compat-table/es6/)

---

# What you should know
> A quick course on JavaScript

----

## Strict

The syntax, for declaring [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), was designed to be compatible with older versions of JavaScript.

```
'use strict';
var a = '1234';
console.log(b);         // error
```

Not Allowed to:
- Using a variable/object without declaring it
- Deleting a variable
- With statement
- Keywords: interface, private, yield, ...
- ...
- [See also](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Strict_mode)

> always 'use strict' when using Javascript in ES5

----

## Var, Let, Const

```js
// ES5 style
var name = 'Peter'

// ES6 style
const name = 'Peter'
let value = 10;
value = 11;
```

> In ES6+ always prefer ```const``` and ```let``` over ```var```.

----

## Functions

You can define a function on multiple ways

```js
// Function Declaration
function foo(){
    ...
}

// Function Expression
const bar = function(arg){
    ...
};

// Function Expression in object
const obj = {
  name: 'Peter',
  bar: function(arg) {  // ES5 style
  },
  foo() {               // ES6 style
    ...
  }
}
```

----

## Arrow Functions

The modern way of defining a function

```js
// Function Expression (ES5)
const bar = function(arg){
    ...
};

// Arrow function expression (ES6)
const bar = (arg) => {
  
} 
```

Simpler syntax

```js
var createGreeting = function(message, name) {
    return message + name;
}

// version 1
const arrowGreeting = (message, name) => {
    return message + name;
}

// version 2
const arrowGreeting = (message, name) => message + name;
```

----

# this

The value of the this reference is defined by the following rules:

- The call context
- Explicit binding
- Hard binding
- new operator

Rules are applied in reverse order.

----

## this
### The call context

```js
const obj = {
  name: 'peter',
  doThis() {
    console.log(this.name)
  }
}

obj.doThis();   // output: 'peter'
```
Follow the dot (.)

----

## this
### Explicit binding

```js
function doThis(prefix) {
  console.log(prefix + ' ' + this.name)
}

const otherObj = { name: 'john'};
doThis.call(otherObj, 'Mr')       // output: 'Mr john'
doThis.apply(otherObj, ['Sir'])   // output: 'Sir john'
```

Use 'call' or 'apply'

----

## this
### Hard binding

```js
function doThis() {
  console.log(this.name)
}

const obj = { name: 'john'};
const fn = doThis.bind(otherObj);
fn(otherObj)   // output: 'john'

// other example
const car = {
    name: 'Bmw'
    start() {
        setTimeout(function() {
            console.log(this.name + ' started')
        }.bind(this), 1000)
    }
}
car.start();        // output: Bmw started
```

arrow function

```js
const car = {
    name: 'Bmw'
    start() {
        setTimeout(() => {    // arrow function
            console.log(this.name + ' started')
        }, 1000)
    }
}
```

----

## this
### New operator

```js
// Constructor function
function User(name) {
    this.name = name;
}
const user = new User('peter');
user.name;         // 'peter'
```

```js
// ES6 class
class User {
  constructor(name) {
    this.name = name;
  }
}
const user = new User('peter');
user.name;         // 'peter'
```

----

## this
### Summary: So to know the value of `this`:

- Is the function called from an object created by `new`?
- Is the function hard bind to `this` or is an arrow function?
- Is the function called with `call` or `apply` specifying an explicit `this`?
- Is the function called via a containing/owing object (call context)?

---

# JS Quirks

> Why of why

----

## Equality operator

```js
console.log(3 == "3");          // true
console.log(1 == true);         // true
console.log('' == false);       // true
console.log('23' == true);      // true
console.log('true' == true);    // true
console.log('false' == false);  // false

console.log(3 === "3");         // false
```

See [http://dorey.github.io/JavaScript-Equality-Table/](http://dorey.github.io/JavaScript-Equality-Table/)

> Always use `===` unless you have a good reason to use `==`

----

## Truthy / Falsy

```js
// what about following conditions check
if (value) {
    ...
}
```

Truthy

```
true
{}
[]
"some string"
3.14
new Date()
```

Falsy

```
false
0 (zero)
"" (empty string)
null
undefined
NaN (a special Number value meaning Not-a-Number!)
```

----

## parseInt

```js
parseInt('16')          // 16
parseInt("16 tons")     // 16

// what!!
parseInt('08')          // 0 (on some browsers)
parseInt('09')          // 0 (on some browsers)
```

Better to use

```js
parseInt('08', 10)      // 8
Number('08')            // 8
+'08'                   // 8
```

----

## Floating point

```js
console.log(0.1 + 0.2 == 0.3);    // false!
```

Better to use

```js
// convert to integer
console.log((0.1 * 100) + (0.2 * 100) == (0.3 * 100));  // true!
```

----

## NaN

```js
+'0'                    // 0
+'oops'                 // NaN
Number('oops')          // NaN
0/0                     // NaN

typeof NaN === 'number' // true
NaN === NaN             // false
NaN !== NaN             // true
```

Better to use

```js
const a = 0/0
isNaN(NaN)              // true
Object.is(a, NaN)       // true
```

---

# Array functions
> makes your live easier

----

## Array handling

Object array 

```js
const companies = [
  { id: 1, name: 'Acme', category: 'finance', employees: 5},
  { id: 4, name: 'Globex', category: 'tech', employees: 1010},
  { id: 2, name: 'Soylent', category: 'food', employees: 120}
]
```

Don't write this code!

```js
const names = [];
for (let i=0; i < companies.length; i++) {
  names.push(companies[i].name)
}
```

```js
const totEmployees = 0;
for (let i=0; i < companies.length; i++) {
  totEmployees += companies.employees
}
```

```js
companies.splice(2, 1);
```

----

## ES array functions

```js
// forEach (loop over all items)
companies.forEach(item => {
  console.log(item)
})

// filter
const bigCompanies = companies.filter(item => item.employees > 1000)

// find
const acme = companies.find(item => item.name === 'Acme')

// map (transform items)
const transformed = companies.map(item => {
  return {
    id: item.id.toString(),
    name: item.name;
  }
})
const companyNames = companies.map(item => item.name)

// reduce
const totEmployees = companies.map((acc, item) => {
  return acc + item.employees;
}, 0)

// sort 
const sortedCompanies = companies.sort((a, b) => a.name > b.name)
```

<small>[JavaScript Higher Order Functions & Arrays Youtube](https://www.youtube.com/watch?time_continue=495&v=rRgD1yVwIvE)</small>

----

## Usefull cases

Chain functions

```js
const sortedNames = companies
  .map(item => item.name)
  .sort((a, b) => a > b)
```

Add item to array

```js
const name = 'Wolfoods';
const newId = companies.reduce((acc, item) => {
  return Math.max(acc, item.id);
}, 0) + 1
companies.push({
  id: newId,
  name
  category: 'science'
})
```

Remove an item from an array

```js
const idToRemove = 999;
companies = companies.filter(item => item.id == idToRemove)
```

Update an item

```js
const company = companies.find(item => item.id == 1)
company.name = 'Other name'
```

---

# ES6

> Good to know

----

## Simplified object notation

```js
// ES3/ES5
function getCar(make, model, value) {
    return {
        make: make,
        model: model,
        value: value
    };
}
```

vs

```js
// ES6
// With property value shorthand syntax, you can omit the property
// value if key matches variable name.
function getCar(make, model, value) {
    return {
        make,
        model,
        value
    };
}
```

----

## Promises

Making async methods calls via promise

```js
myAsyncAction(arg)
  .then(result => {
    // successfull result
  })
  .catch(err => {
    // error 
  })
```

You can chain multiple async methods

```js
// step 1
myAsyncAction(arg)
  .then(result => {
    // step 2
    return myOtherAction(result.name);  // also returns an promise
  })
  .catch(err => {
    // common error handling 
  })
```

Wait for multiple promises

```js
  const p1 = myAsyncAction(123);
  const p2 = myOtherAction('peter');
  Promise.all([p1, p2]).then(results => {
      console.log(results); // [3, "foo"]
  });
```

----

## String interpollation

```js
const firstName = 'Peter';
const lastName = 'Jansens';

// es5 (don't use this anymore)
const fullName = firstName + ' ' + lastName;

// es6 - string interpollation
const fullName = `${firstName} ${lastName}`
```
Multiline with interpollation

```js
    const message = 'world'
    const template = `
        <div>
            <span>Hello ${message}</span>
        </div>
    `;
```

You can use expressions

```js
    const message = `1 and 1 make ${1 + 1}`;
    console.log(message);
```

> No more string concatenation!

---

# JavaScript Modules
> Keep your code isolated

----

## IIFE

Immediately-Invoked Function Expression (IIFE).

```js
(function() {
    'use strict'
    const name = 'peter'
    console.log(name)
})();
```

Export your module

```js
const myModule = (function() {
    const myVar = '';
    function doThis() {
        console.log(myVar)
    }
})();

// in other file
myModule.doThis();
```

> Always use strict mode.

----

## ES Module

Oops, not supported by any browser (yet).

```js
// service.js
export const MAX_LENGTH = 1000;
export class Car() {
    ...
}
const config = {
    ...
}
export default config;
```

```js
// main.js
import config from './service';
import { MAX_LENGTH, Car } from './service'

import * as lib from './service';
console.log(lib.MAX_LENGTH)
const car = new lib.Car();

import config, { MAX_LENGTH, Car } from './service'
```

ES Modules can be used by using a transpiler (Babel)

> No need for IIFE & strict mode :)

---

# Resources

- [You-Dont-Know-JS Book series](https://github.com/getify/You-Dont-Know-JS)
- [Frontendmasters - Kyle Simpson](https://frontendmasters.com/courses/)
- [JavaScript Weekly](http://javascriptweekly.com/)
