/**
 * [注意]レクチャーをプルダウンで選択すると、<head>タグにそのレクチャーでimport "Example.css"のように読み込んだスタイルが挿入されます。このスタイルはプルダウンを切り替えても残りつづけるため、まだcssを記述していないのにスタイルが適用されていると感じた場合にはブラウザを更新してください。
 */
import "./Example.css"
import Child from "./coponent/Child";

const Example = () => {
  return (
  <Child name="鈴木"/>
  );
};

export default Example;
