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
