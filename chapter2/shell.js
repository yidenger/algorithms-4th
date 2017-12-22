// 希尔排序

class Shell {
  constructor() {

  }

  sort(arr) {
    let h = 1;
    while(h < arr.length / 3) h = 3 * h + 1;

    while(h >= 1) {
      for(let i = h; i < arr.length; i++) {
        for(let j = i; j >= h && arr[j] < arr[j-h]; j -= h) {
          let tmp = arr[j];
          arr[j] = arr[j-h];
          arr[j-h] = tmp;
        }
        h = parseInt(h/3);
      }
    }
  } 
}