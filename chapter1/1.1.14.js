// 编写一个静态方法lg(), 接受一个整型参数N, 返回不大于log2N的最大整数。不能使用Math库
// 解: 转化为, 2的x次方 <= N, 求x;
class Num {
  constructor() {}

  static lg(num) {
    let x = -1;
    let tmp = 1;
    while (tmp <= num) {
      tmp = tmp * 2;
      x++;
    }
    return x;
  }
}

console.log(Num.lg(17));
