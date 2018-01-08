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

- Edge, Chrome, Firefox and Safari: +95%
- Node 8.x: +98%

> [http://kangax.github.io/compat-table/es6/](http://kangax.github.io/compat-table/es6/)

---

# What you should know
> A quick course on JavaScript

---

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

## IIFE

Immediately-Invoked Function Expression (IIFE)

```js
(function() {
    'use strict'
    const name = 'peter'
    console.log(name)
})();
```

Is used to isolate from global scope

```js
const myModule = (function($, global) {
    const myVar = '';
    function doThis() {
        console.log(myVar)
    }
})(jquery, window);

// in other file
myModule.doThis();
```

```use strict``` is implicit set when using ES modules

> So, except for ES modules, always use an IIFE.

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
- Is the function bind to an explicit `this` or is an arrow function?
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

## typeof

Ok, this is simple

```js
typeof 89                   // 'number'
typeof true                 // 'boolean'
typeof 'some text'          // 'string'
typeof { name: '123' }      // 'object'
typeof function() {}        // 'function'

let val;
typeof val                  // 'undefined'
```

But, what wait a moment!

```js
typeof null                 // 'object'
typeof []                   // 'object'
```

[How to check an object?](https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript)

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

Wait or multiple promises

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

----

## Import / Export

ES Modules (not supported by browser, you need a bundler)

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
import config from './service';
import { MAX_LENGTH, Car } from './service'

import * as lib from './service';
console.log(lib.MAX_LENGTH)
const car = new lib.Car();

import config, { MAX_LENGTH, Car } from './service'
```

Bye, bye IIFE ( Immediately-Invoked Function Expression )

---

## Resources

- [You-Dont-Know-JS Book series](https://github.com/getify/You-Dont-Know-JS)
- [Frontendmasters - Kyle Simpson](https://frontendmasters.com/courses/)
- [JavaScript Weekly](http://javascriptweekly.com/)
- [TOP 10 JAVASCRIPT TRAPS FOR A C# DEVELOPER](http://prasadhonrao.com/top-10-javascript-traps-for-a-csharp-developer/)