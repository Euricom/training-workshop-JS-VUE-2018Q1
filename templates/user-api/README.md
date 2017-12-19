## To start

```bash
npm install
npm run start
```

## API

Server is listening on http://localhost:3000/api/users

```
GET /api/users
GET /api/users/1000
POST /api/users
{
  "firstName": "peter",
  "lastName": "cosemans",
  "age": 52,
  "email": "peter.cosemans@gmail.com",
  "role": "admin"
}
PUT /api/users/1000
{
  "firstName": "peter",
  "lastName": "cosemans",
  "age": 52,
  "email": "peter.cosemans@gmail.com",
  "role": "admin"
}
DELETE /api/users/1000
```
