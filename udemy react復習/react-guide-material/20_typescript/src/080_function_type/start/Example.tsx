const Example = () => {
  // 練習用
  function sum1(x: number, y: number) {
    return x + y
  }
  // ↑求められている引数より少ない引数を渡すには、引数(ここではy)の前に？を置く。それか =をつけてデフォルト値を設定する
  const sum2 = (t: number, z: number) : number => {
    return t + z
  }
  console.log(sum2(3, 2))
  console.log(sum1(1, 2))

  type SUM111 = (x:number, y:number) => number
  // 関数の型エイリアスもできます↑

  const sum3 :SUM111 =(x,y)=>x+y;
  const result2= sum3(6,7)
  console.log(result2)

};



export default Example;
