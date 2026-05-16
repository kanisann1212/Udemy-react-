const Example = () => {
  // 練習用
  const arry1 : number [] = [1,2,3]
  const arry2 :string[] = ['unko','unko']
  const arry3 :'tinko'[] = ['tinko','tinko']
  const arry4 : (string | number )[] = []
  // ↑上記のように配列にもリテラル型・ユニオン型が使える

  type obj1 = {name:string, age:number} 
  type obj1of1 = {name:string, age:number,hobbies:string}
  const obj2 :obj1 = {name:'taro',age :12}
  // ↑上記のようにオブジェクトの型定義は書く。指定されている型定義より、プロパティが少ないor多いとエラーになる
  const obj3 :obj1of1 = {name:'unko',age:45,hobbies:'soccer'}
  const test :obj1 = obj3
  // ↑上記のように求められている型定義より多いプロパティを持っているオブジェクトなら代入できる(構造的部分型)

  const users :obj1[] =[
    {name:'unko',age:45 , },
    {name:'unko',age:45 , },
    {name:'unko',age:45 , },
  ]
  // ↑上記のようにオブジェクトと配列も組み合わせることができる。
  console.log (arry1,arry2,arry3,arry4,obj2,test,users)
};


export default Example;
