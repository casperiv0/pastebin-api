# Documentation

- [Return to README](../README.md)
- [Initialize The Client](#initialize-the-client)
- [Create a paste](#create-a-paste)
- [Login using name and password](#login-using-name-and-password)
- [Get all pastes from user](#get-pastes-from-user)
- [Delete a paste](#delete-a-paste)

## Initialize The Client

**commonjs**

```js
const PasteClient = require("pastebin-api").default;

const client = new PasteClient("DEV_API_KEY");
```

**ES6**

```ts
import PasteClient from "pastebin-api";

const client = new PasteClient("DEV_API_KEY");
```

**Options**

| Name        | Type     | Description                                        | Required |
| ----------- | -------- | -------------------------------------------------- | -------- |
| `devApiKey` | `string` | [Your dev api key](https://pastebin.com/doc_api#1) | `true`   |

[**Back To Top**](#documentation)

## Create a Paste

**commonjs**

```js
const PasteClient = require("pastebin-api").default;

const client = new PasteClient("DEV_API_KEY");

const url = await client.createPaste({
  code: "const something = 'Hello World!'",
  expireDate: "N",
  format: "javascript",
  name: "something.js",
  publicity: 0,
});

console.log(url);
```

**ES6**

```ts
import PasteClient from "pastebin-api";

const client = new PasteClient("DEV_API_KEY");

const url = await client.createPaste({
  code: "const something = 'Hello World!'",
  expireDate: "N",
  format: "javascript",
  name: "something.js",
  publicity: 0,
});

console.log(url);
```

**Options**

| Name         | Type     | Description                       | Required |
| ------------ | -------- | --------------------------------- | -------- |
| `code`       | `string` | The code you want to push         | `true`   |
| `expireDate` | `string` | Sets the expire date of the paste | `false`  |
| `format`     | `string` | The Syntax format                 | `false`  |
| `name`       | `string` | The name of your paste            | `false`  |
| `publicity`  | `number` | `0` \| `1` \| `2`                 | `false`  |

[**Back To Top**](#documentation)

## Login using name and password

**commonjs & ES6**

```js
const client = new PasteClient("DEV_API_KEY");

const token = await client.login("user_name", "user_password");

// This is the user token that can be used to get all the user's pastes or delete one
console.log(token);
```

**Options**

| Name       | Type     | Description         | Required |
| ---------- | -------- | ------------------- | -------- |
| `name`     | `string` | The user's name     | `true`   |
| `password` | `string` | The user's password | `true`   |

[**Back To Top**](#documentation)

## Get pastes from user

**commonjs & ES6**

```js
const client = new PasteClient("DEV_API_KEY");

// Login to get the token
const token = await client.login("user_name", "user_password");

// Get a limit of 1000 pastes from the user
const pastes = await client.getPastesByUser({
  userKey: token,
  limit: 100, // Min: 1, Max: 1000
});

// An array of pastes
console.log(pastes);
```

**Options**

| Name      | Type     | Description                                                                 | Required |
| --------- | -------- | --------------------------------------------------------------------------- | -------- |
| `userKey` | `string` | The token returned from [PasteClient#login](#login-using-name-and-password) | `true`   |
| `limit`   | `number` | The limit of pastes to get                                                  | `false`  |

[**Back To Top**](#documentation)

## Delete a paste

**commonjs & ES6**

```js
const client = new PasteClient("DEV_API_KEY");

// Login to get the token
const token = await client.login("user_name", "user_password");

// Will return a boolean if deleted
const deleted = await client.deletePasteByKey({
  userKey: token,
  pasteKey: "paste-key-here",
});

// An array of pastes
console.log(pastes);
```

**Options**

| Name       | Type     | Description                                                                 | Required |
| ---------- | -------- | --------------------------------------------------------------------------- | -------- |
| `userKey`  | `string` | The token returned from [PasteClient#login](#login-using-name-and-password) | `true`   |
| `pasteKey` | `string` | The key (id) of the paste                                                   | `true`   |

[**Back To Top**](#documentation)
