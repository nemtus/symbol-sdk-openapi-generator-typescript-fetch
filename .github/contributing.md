---
title: Contribution Guide
description: Any contribution to symbol-sdk-openapi-generator-typescript-axios is more than welcome!
---

> Any contribution to symbol-sdk-openapi-generator-typescript-axios is more than welcome!

## Reporting Issues

A great way to contribute to the project is to send a detailed report when you encounter an issue.
Please make sure to include a reproduction repository or your code details.
so that bugs can be reproduced without great efforts. The better a bug can be reproduced, the faster we can start fixing it!

## Pull Requests

We'd love to see your pull requests, even if it's just to fix a typo!

However, any significant improvement should be associated to existing the followings.

- [feature request](https://github.com/nemtus/symbol-sdk-openapi-generator-typescript-axios/labels/enhancement)
- [bug report](https://github.com/nemtus/symbol-sdk-openapi-generator-typescript-axios/labels/bug)
- [test request](https://github.com/nemtus/symbol-sdk-openapi-generator-typescript-axios/labels/test)
- [refactor request](https://github.com/nemtus/symbol-sdk-openapi-generator-typescript-axios/labels/refactor)
- [docs request](https://github.com/nemtus/symbol-sdk-openapi-generator-typescript-axios/labels/documentation)

### Getting started

1. [Fork](https://help.github.com/articles/fork-a-repo/) [this repository](https://github.com/nemtus/symbol-sdk-openapi-generator-typescript-axios) to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Run `npm install` to install the dependencies.

### Setup

Refer [For developers section in README.md](https://github.com/nemtus/symbol-sdk-openapi-generator-typescript-axios#for-developers).

### Test structure

A great PR, whether it includes a bug fix or a new feature, will often include tests.
To write great tests, let us explain our test structure:

#### Unit tests

The unit tests can be found in `*.spec.ts` and will be executed after building in GitHub Actions CI process.

After adding your unit tests, you can run them directly:

```sh
npx jest src/your-module/your-code.spec.ts
```

Or you can run the whole unit test suite:

```sh
npm run test
```

Please be aware that you might have to rebuild openapi3.yml and generate REST API client code and rebuild your codes before!

### Testing your changes

While working on your PR you will likely want to check if your code is working as expected or debug your current changes.

To do so you can use `npm link`.

### Linting

As you might have noticed already, we are using ESLint and Prettier to enforce a code standard. If you have not installed them, Please install them. Then, your code will be formatted automatically. If there are still errors left, you must correct them manually.

### Documentation

If you are adding a new feature, or refactoring or changing the behavior of this in any other manner, you'll likely
want to document the changes. Please do so with a PR to this repository.
You don't have to write documentation up immediately (but please do so as soon as your pull request is mature enough).

### Final checklist

When submitting your PR, there is a simple template that you have to fill out.
Please tick all appropriate "answers" in the checklists.
