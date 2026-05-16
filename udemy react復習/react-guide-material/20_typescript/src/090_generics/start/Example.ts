const Example = () => {
  // 練習用
  const sum1 = (x: string, y: number): string[] => {
    return new Array(y).fill(x);

    const sum2 = (x: number, y: number): number[] => {
      return new Array(y).fill(x);
    }
    // ↑上記のように引数や戻り値の型だけを変えて関数を使いまわしたいときに ジェネリクス をつかう

    const GENERICS = <T>(x: T, y: number): T[] => {
      return new Array(y).fill(x)
    }
    const TEST = GENERICS<number>(10, 3)
    const TEST2 = GENERICS(10, 3)
    console.log(TEST)
  }
};

export default Example;
