// 数据结构队列的实现

class QueueByArray {
  constructor() {
    this.dataSource = [];
  }

  enqueue(item) {
    this.dataSource.push(item);
  }

  dequeue() {
    const toRemove = this.dataSource.splice(0, 1);
    return toRemove[0];
  }

  isEmpty() {
    if (this.dataSource.length == 0) {
      return true;
    }
    return false;
  }

  size() {
    return this.dataSource.length;
  }

  display() {
    console.log(this.dataSource);
  }

}

module.exports = QueueByArray;

const queue = new QueueByArray();
queue.enqueue('abc');
queue.enqueue('def');
queue.enqueue('ghi');

queue.display();

queue.dequeue();
queue.dequeue();

queue.display();