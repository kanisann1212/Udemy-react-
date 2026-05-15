const Example = () => {
  // 練習用
  const str :string = 'unko'
  console.log(str)

  const num :number = 84848
  console.log(num)

  const bool :boolean = true
  console.log(bool)

  // リテラル型:下記のように型宣言のとこに明示的に値を入れるとその値しか受け付けない型を定義できる
  let isis :true = true
  let numis : 5757 = 5757
  console.log(isis,numis)
};

export default Example;
