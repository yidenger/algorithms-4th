/*
 * @Author: Seth 
 * @Date: 2017-11-30 13:58:13 
 * @Last Modified by: Seth
 * @Last Modified time: 2017-11-30 15:10:06
 * @Description: 二分法查找
 */


class BinarySearch {
  constructor() {}

  static rank(key, array) {
    // 数组必须是有序的
    let low = 0;
    let high = array.length - 1;

    while(low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (key < array[mid]) high = mid - 1;
      else if (key > array[mid]) low = mid + 1;
      else return mid;
    }

    return -1;
  }

  static rankBySelf(key, array, low, high) {
    // 数组必须是有序的
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if (key < array[mid]) {
      return this.rankBySelf(key, array, low, mid - 1);
    } 
    else if (key > array[mid]) {
      return this.rankBySelf(key, array, mid + 1, high);
    }
    else {
      console.log('return mid: ', mid);
      return mid;
    }
  }
}

const array = [19, 40, 20, 50, 100, 30, 18, 8, 60, 80];
const arraySort = array.sort((a, b) => a - b);
console.log(BinarySearch.rank(20, arraySort));
let tmp = 0;
tmp = BinarySearch.rankBySelf(20, arraySort, 0, array.length - 1);
console.log(tmp);

