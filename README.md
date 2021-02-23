# pastebin-api

A very simple pastebin npm package to create a new paste!

## Docs

### Client

**commonjs**

```js
const HasteClient = require("hastepin-api");

const client = new HasteClient("DEV_API_KEY");
```

**ES6**

```ts
import HasteClient from "hastepin-api";

const client = new HasteClient("DEV_API_KEY");
```

### Create a paste

**commonjs**

```js
const HasteClient = require("hastepin-api");

const client = new HasteClient("DEV_API_KEY");

const url = await client.createPaste({
  code: "const something = 'Hello World!'",
  expireDate: "N",
  format: "javascript",
  name: "something.js",
  publicity: "0",
});

console.log(url);
```

**ES6**

```ts
import HasteClient from "hastepin-api";

const client = new HasteClient("DEV_API_KEY");

const url = await client.createPaste({
  code: "const something = 'Hello World!'",
  expireDate: "N",
  format: "javascript",
  name: "something.js",
  publicity: "0",
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
| `publicity`  | `string` | `0` \| `1` \| `2`                 |
