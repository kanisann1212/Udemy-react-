import Animalitem from "./Animalitem";
const Animallist = ({ animals }) => {
  if(animals.length === 0){
    return <h1>該当するアニマルが見つかりません。</h1>
  }
  return (<ul>
    {animals
      // {}を書く場合は処理を書くとき(この場合はreturnを最後に書かないと値が返ってこない)
      // ()を書くときはそのまま値を返す時
      .map((animal) => {
        return (
          <Animalitem animal={animal} key={animal}/>
        )
      })}
  </ul>)
}

// アニマルを表示するためのリスト
export default Animallist;
