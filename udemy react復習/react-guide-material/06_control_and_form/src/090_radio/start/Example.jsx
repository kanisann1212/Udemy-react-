import { useState } from "react";

const Example = () => {
  const [fruit, setfruit] = useState("Apple")
  const onChange = (e) => setfruit(e.target.value)
  const fruitgroupe = ["Apple", "Orange", "Cherry"];
  return (
    <>
      {/* ↓普通の書き方 */}
      {/* <label>
        <input type="radio" value="Apple" checked={fruit === "Apple"} onChange={onChange} />
        リンゴ
      </label>
      <label>
        <input type="radio" value="Orange" checked={fruit === "Orange"} onChange={onChange} />
        オレンジ
      </label>
      <label>
        <input type="radio" value="Cherry" checked={fruit === "Cherry"} onChange={onChange} />
        さくらんぼ
      </label> */}
      <h1>わたしは{fruit}がたべたい</h1>
      
      {/* ↓mapメソッドを使ったかきかた */}
      {fruitgroupe.map(value => {
        return (
          <label key={value}>
            <input type="radio" value={value} checked={fruit === value} onChange={onChange} />
            {value}
          </label>
        )
      })}
    </>
  );
};

export default Example;
