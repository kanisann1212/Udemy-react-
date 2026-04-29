const Animalitem = ({animal}) => {
  return (
    <li>{animal ?? "null,undefinedでした"}{animal === "Dog" && "犬だよ"}</li>
  )
}
// アニマルの★表示などのコンポーネント
export default Animalitem;