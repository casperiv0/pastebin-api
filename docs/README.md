# Documentation

- [Initialize client](#initialize-client)
- [Create a paste](#create-paste)
- [Login using name and password](#login-using-name-and-password)
- [Get all pastes from user](#get-pastes-from-user)
- [delete a paste](#delete-paste)

## Initialize client

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

## Create paste

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

| Name         | Type     | Description                       |
| ------------ | -------- | --------------------------------- |
| `code`       | `string` | The code you want to push         |
| `expireDate` | `string` | Sets the expire date of the paste |
| `format`     | `string` | The Syntax format                 |
| `name`       | `string` | The name of your paste            |
| `publicity`  | `number` | `0` \| `1` \| `2`                 |

## Login using name and password

## Get pastes from user

## Delete paste
