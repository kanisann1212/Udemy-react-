const Example = () => {
  // 練習用

  type Username = string 
  // ↑上記のようにすでにある方にも別名をつけれる
  type UserGender = 'man' | 'women' | 'okama'
  // ↑ユニオン型やリテラル型にも型エイリアスできる
  type Userinfo = {
    name:Username,
    gender:UserGender
  }
  const yuuma :Userinfo = {
    name:'ユウマちゃん',
    gender:'man'
  }
  console.log(yuuma)
};

export default Example;
