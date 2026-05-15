const Example = () => {
  // 練習用
  let SorN : string | number = 3232
  SorN = 'tyutyu'
  // ユニオン型は何個でも定義できる( | )は見栄えの為で、極論要らない。リテラル型もいける 

  let unko : 123 | 'hello' | string = 123
  console.log (unko)

  // type week = 
  // | 'monday'
  // | 'tuesday'

  type monster = 
  'unko' 
  'tinko'
  'manko'

  const day : monster = 'unko'
  console.log(day)
};

export default Example;
