/**
 * [注意]レクチャーをプルダウンで選択すると、<head>タグにそのレクチャーでimport "Example.css"のように読み込んだスタイルが挿入されます。このスタイルはプルダウンを切り替えても残りつづけるため、まだcssを記述していないのにスタイルが適用されていると感じた場合にはブラウザを更新してください。
 */
import "./Example.css"
import Child from "./coponent/Child";

const Example = () => {
  const profile = [
    {name:"yuuma", age:28, country:"ja"},
    {name:"manato", age:28, country:"UK"}
  ]
  return (
    <>
    <Child 
    name = {profile[0].name}
    age = {profile[0].age}
    country= {profile[0].country}  />
   </>
  );
};

export default Example;
