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
- When adding a new package to the `packages` folder, you will need to add `eslint` as a devDependency in order to run the tests successfully.

## Publishing
- Once your PR has been approved and merged into master, run the appropriate version upgrade script from package.json (`npm run version:${patch | minor | major}`) then run `npm run publish`.
