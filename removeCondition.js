const babel = require('@babel/core');

const { types: t } = babel;

/**
 * remove literal condition
 * @param {babel.NodePath<babel.types.ConditionalExpression | babel.types.IfStatement>} path
 */
function handleCondition(path) {
  const { test, consequent, alternate } = path.node;
  if (t.isBooleanLiteral(test)) {
    const answer = test.value ? consequent : alternate;
    // answer may be null
    if (!answer) {
      path.remove();
      return;
    }
    // IfStatement has multiple nodes
    if (t.isBlockStatement(answer)) {
      path.replaceWithMultiple(answer.body);
    } else {
      path.replaceWith(answer);
    }
  }
}

module.exports = handleCondition;
