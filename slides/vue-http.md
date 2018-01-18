# VueJS Http
<img src="./images/http.png" width="400px" /><br>
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

# REST API
> Simplified RESTful API Designing guidelines

----

## Methods

GET

```bash
GET api/users           # get all users
GET api/users/123       # get single user with id = 123
```

POST

```
POST api/users           # create new user
{
    ...
}
```

PUT

```
PUT api/users/123       # update existing user
{
    ...
}
```

DELETE

```
DELETE api/users/123      # delete user with id = 123
```

[Simplified RESTful API Designing guidelines](https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9)

---

# Loading data
> Get the data from the backend

----

## HTTP In VueJS

Unlike Angular there is no HTTP support in VueJS

But we can use following JavaScript solutions:

Fetch

> Fetch, the modern xmlhttprequest version

or Axios

> Axios, a 3th party http library

<small>
[Can I Use - Fetch](http://caniuse.com/#search=fetch)
</small>

----

## Using fetch

Available in most browsers

```js
fetch('api/users')
    .then(checkStatus)
    .then(res => res.json())
    .then(users => {
        console.log(users)
    })
    .catch(err => {
        console.log(err)
    })

function checkStatus(res) {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
}
```

----

## Using Axios

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

or

```bash
# install as esm library
$ npm install axios
```

```js
import axios from 'axios'

axios.get('api/users')
  .then(users => {
      console.log(users.data);
  })
  .catch(res => {
    // http or connection error
    console.log(res.status, res.statusText);
  });
```

> Axios is the preferred way of using http

---

# Use http in Vue
> No Vue application without Http

----

## Loading users from API

```html
<template>
    <h1>User List</h1>
    <ul>
        <li v-for="user of users">
            {{user.name}}
        </li>
    </ul>
</template>
<script>
import axios from 'axios';
export default {
    name: 'userList',
    data() {
        // don't forget to initialize the users here
        users: []
    },
    created() {
        axios.get('api/users')
             .then(res => this.users = res.data);
    }
}
</script>
```

----

## Add Error Handling

```html
<template>
    <h1>User List</h1>
    <span v-if="errorMessage" class="error">{{message}}</span>
    <ul>
        <li v-for="user of users">{{user.name}}</li>
    </ul>
</template>
<script>
import axios from 'axios';
export default {
    name: 'userList',
    data() {
        users: [],
        errorMessage: '',
    },
    created() {
        axios.get('api/users')
             .then(res => this.users = res.data)
             .catch(error => this.errorMessage = error.message);
    }
}
</script>
```

----

## Update entity

```html
<template>
    <form @submit.prevent="onSubmit()">
        Name: <input type="text" v-model="user.name">
        Age: <input type="number" v-model="user.age">
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        user: {},
    },
    created() {
        // get the single user
        axios.get('api/users/123')
             .then(res => this.users = res.data)
    },
    methods: {
        onSubmit() {
            // update the user
            axios.put('api/users/123', this.user)
                 .then(res => {
                    console.log('success saved')
                 })
        }
    }
}
</script>
```



---

# Exercise

Build an application to manage users<br>
(you can use the `.../template/base-vue-http` to start from)

- List users retrieved by REST api (GET /api/users)
- Select user
- Edit selected user in form
- Submit user and update on server (PUT /api/users/1123)
- (optional) delete user (DELETE /api/users/1123)
- (optional) add a new user (POST /api/users)