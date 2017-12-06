// 计算一个字符串表达式运算的值
// 解: 使用两个stack, 一个操作数的stack， 一个运算符的stack

const Stack = require('./stack');

class Expression {
  constructor() {}

  calculate(str) {
    const stackNum = new Stack();
    const stackSymbol = new Stack();

    const symbol = ['+', '-', '*', '%', '/'];

    for(let i = 0; i < str.length; i++) {
      if (str[i] == '(') continue;
      if (symbol.includes(str[i])) {
        stackSymbol.push(str[i]);
      }
      else if (str[i] == ')') {
        const last = stackNum.pop();
        const prev = stackNum.pop();
        const operation = stackSymbol.pop();
        const expressionStr = `${parseInt(prev)}${operation}${parseInt(last)}`
        const result = eval(expressionStr);
        stackNum.push(result);
      }
      else {
        str[i] !== ' ' && stackNum.push(str[i]);
      }
    }
    
    if (stackSymbol.length() > 0) {
      const last = stackNum.pop();
      const prev = stackNum.pop();
      const operation = stackSymbol.pop();
      const expressionStr = `${parseInt(prev)}${operation}${parseInt(last)}`
      const result = eval(expressionStr);
      stackNum.push(result);
    }

    return stackNum.pop();
  }
}

const express = new Expression();
const str = '(1 + (2 * 3)) * 4';
console.log('calculate: ', str);
console.log('result: ', express.calculate(str));


