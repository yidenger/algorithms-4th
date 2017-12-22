// 选择排序

class Choice {
  constructor() {

  }

  sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for(let j = i + 1; j < arr.length; j++) {
        if(arr[j] < arr[min]) min = j;
      }

      // 交换
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp; 
    }

  }
}

const arr = [18, 2, 9, 4, 3, 8, 6, 10];

console.log('before sort: ', arr);

const choice = new Choice();
choice.sort(arr);

console.log('after sort: ', arr);