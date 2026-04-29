const Animallist= ({animals}) => {
  return(<ul>
    {animals
      // {}を書く場合は処理を書くとき(この場合はreturnを最後に書かないと値が返ってこない)
      // ()を書くときはそのまま値を返す時
      .map((animal) => (
        <li key={animal}>{animal ?? "null,undefinedでした"}{animal === "Dog" && "犬だよ"}</li>
      ))}
  </ul>)
}

export default Animallist;
