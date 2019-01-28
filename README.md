# @logojoy/lint

## Usage

### For all JS environments
```
npm i --save-dev eslint @logojoy/eslint-config
```

In your local `.eslintrc`

```
{
  "extends": ["@logojoy"]
}
```

### For React environments
```
npm i --save-dev eslint babel-eslint @logojoy/eslint-config @logojoy/eslint-config-react
```

In your local `.eslintrc`

```
{
  "extends": ["@logojoy", "@logojoy/react"]
}
```

### For mocha environments
```
npm i --save-dev eslint @logojoy/eslint-config @logojoy/eslint-config-mocha
```

In your local `.eslintrc`

```
{
  "extends": ["@logojoy", "@logojoy/mocha"]
}
```

## Developing
- Once you download the repo to your machine, run `npm install` in the root folder, then run `npm run bootstrap` to install the dependencies for each package.

- When adding a new package to the `packages` folder, you will need to add `eslint` as a devDependency in order to run the tests successfully. You should also ensure that the new package's `package.json` has the following configuration added in order to be published as a public package:

```json
"publishConfig": {
    "access": "public"
  }
```

## Publishing to npm
- Once your pull request has been approved and merged into the master branch, run `npm run publish` and select whether it will be a major, minor, or patch update.
