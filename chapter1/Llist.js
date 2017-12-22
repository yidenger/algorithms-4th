// 数据结构: 链表

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class Llist {
  constructor() {
    this.head = null;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.find(item);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  find(element) {
    let currentNode = this.head;
    while(currentNode.element != element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  display() {
    let currentNode = this.head;
    do {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    } while(currentNode)
  }

  isEmpty() {
    if(this.head) {
      return false;
    }
    return true;
  }

  findLast() {
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  remove() {
    if(this.isEmpty()) {
      return null;
    }
    
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.next) {
      currentNode = currentNode.next;
    }
    let lastNode = currentNode.next;
    currentNode.next = null;

    return lastNode;
  }
}

module.exports = Llist;

// const ll = new Llist();
// for (let i = 1; i < 10; i++) {
//   ll.insert(i, i - 1);
// }

// ll.display();