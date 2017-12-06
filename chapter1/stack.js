// 数据结构: 栈

class Stack {
  constructor() {
    this.top = 0;
    this.dataSource = [];
  }

  push(element) {
    this.dataSource[this.top++] = element;
  }

  pop() {
    if (this.top > 0) {
      const tmp = this.dataSource.splice(-1, 1);
      this.top--;
      return tmp[0];
    }
  }
  
  length() {
    return this.top;
  }
}

module.exports = Stack;