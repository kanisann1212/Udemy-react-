const Example = () => {
  // 練習用
  let str = 'hello'
  const str2 = 1234

  console.log(str,str2)
  // ↑上記のように型定義をしてない場合、型推論といってTSが勝手に型を推測してあてはめてる
};
 
export default Example;
