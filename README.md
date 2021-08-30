# ast-helper

About AST

## removeCondition

how to use

```js
// in babel plugin
const plugin = {
    visitor{
        ConditionalExpression: handleCondition,
        IfStatement: handleCondition
    }
}

```

transform code

```js
if (true) {
  console.log("consequent result");
} else {
  console.log("alternate result");
}
```

to

```js
console.log("consequent result");
```
