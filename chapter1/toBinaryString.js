/*
 * @Author: Seth 
 * @Date: 2017-11-30 15:37:14 
 * @Last Modified by: Seth
 * @Last Modified time: 2017-11-30 15:43:28
 * @Description: 十进制转二进制
 */

class BinaryString {
  constructor() {}

  static toBinaryString(num) {
    let str = '';
    while(num > 0) {
      str = (num % 2) + str;
      num = Math.floor(num / 2);
    }

    return str;
  }
}

const num = 10;
console.log('num: ', num);
console.log('toBinaryString: ', BinaryString.toBinaryString(num));