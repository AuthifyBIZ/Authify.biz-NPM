# Authify.biz NPM 

This is the official Php Example for [Authify](https://authify.biz).
For more information, please visit [Documenatation](https://setup.authify.biz/).

### Installation
---
```sh
npm install authify
```

### Init API
---

```js

const Authify = rquire('authify');

const API = new Authify.API();

```

### Use API
---

```js

API.loginUser('username', 'password', 'program_key', 'api_key').then(() => {
    console.log('Login success');
}).catch((error) => {
    console.log('Login error: ' + error);
});


API.registerUser('username', 'email', 'password', 'token', 'program_key', 'api_key').then(() => {
    console.log('Register success');
}).catch((error) => {
    console.log('Register error: ' + error);
});

API.activate('username', 'password', 'token', 'program_key', 'api_key').then(() => {
    console.log('Activate success');
}).catch((error) => {
    console.log('Activate error: ' + error);
});

API.log('username', 'message', 'program_key', 'api_key').then(() => {
    console.log('Log success');
}).catch((error) => {
    console.log('Log error: ' + error);
});

```

---
