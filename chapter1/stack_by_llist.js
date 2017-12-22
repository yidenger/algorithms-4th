const Llist = require('./Llist');

class StackByLlst {
  constructor () {
    this.top = 0;
    this.llist = new Llist();
  }

  push(item) {
    this.top++;
    if(this.llist.isEmpty()) {
      this.llist.insert(item, null);
      return;
    }
    // 寻找最后一个元素
    const lastNode = this.llist.findLast();
    this.llist.insert(item, lastNode.element);
  }

  pop() {
    if(this.llist.isEmpty()) {
      return null;
    }
    this.top--;
    return this.llist.remove();
  }

  display() {
    this.llist.display();
  }
}

let sl = new StackByLlst();

sl.push('abc');
sl.push('def');
sl.push('ghi');
sl.push('jkl');
sl.push('mno');
sl.push('pq');
sl.display();
console.log('pop: ', sl.pop());
sl.display();
console.log('pop: ', sl.pop());
sl.display();
