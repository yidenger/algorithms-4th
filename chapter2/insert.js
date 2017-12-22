// 插入排序

class Insert {
  constructor() {}

  sort(arr) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
        // 交换
        let tmp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = tmp;
      }
    }

    return arr;
  }
}

const arr = [8, 6, 7, 5];
console.log('before sort: ', arr);

const insert = new Insert();
insert.sort(arr);

console.log('after sort: ', arr);