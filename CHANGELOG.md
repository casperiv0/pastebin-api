# Changelog

## 2.0.1

- new: able to import `PasteClient` via named exports (`import { PasteClient } from "pastebin-api"`)
  - Old method still works too.
- chore: replace type `string` with `ApiPasteFormat` for `paste_format_short`
- chore: use `Array.isArray` instead of `typeof`
- chore: update dependencies

## 2.0.0

**BREAKING CHANGES:**

- chore: move to ESM ([Read this.](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#pure-esm-package))

```diff
- const PasteClient = require("pastebin-api").default;

+ import PasteClient from "pastebin-api";
```

## 1.0.6

- fix: incorrect docs for `PasteClient#deletePasteByKey`

## 1.0.5

- chore: Updated dependencies
- chore: Added ESLint workflow file
- chore: updated examples

## 1.0.4

- chore: Updated dependencies

## 1.0.3

- chore: Updated dependencies

## 1.0.2

- feat: Support for `folderKey`
- chore: Updated docs

## 1.0.1

- fix: Fixed issue with paste name (#7). Thanks @2colours

## 1.0.0

- fix: Creating a paste will now throw an error if name is longer than 100 characters

## 0.0.9

- fix: Added errors when not providing required data
- chore: Updated documentation

## 0.0.8

- feat: Added documentation

## 0.0.7

- feat: Added `login`, `getPastesByUser` and `deletePasteByKey` methods (docs to follow)
- chore: Updated TypeScript to `4.2.2`
- chore: Added Changelog 🎉

## 0.0.6

- fix: Fixed examples

## 0.0.5

- fix: Fixed modules

## 0.0.4

- feat: Added typings 🎉

## 0.0.3

- fix: Fixed minor things in package.json

## 0.0.2

- chore: Added examples
- chore: Renamed `HasteClient` to `PasteClient`

## 0.0.1

- Initial release
