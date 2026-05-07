import { useState } from "react";
import styled from "styled-components"
const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  const Styledbutton = styled.button`
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background: ${({props}) => props ? 'pink': ''}
    `;
    const Aquabutton = styled(Styledbutton)`
      background-color: aqua;

      &:hover { 
        color: red;
      }
    `;

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <button
        className={`btn ${isSelected ? "selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <Styledbutton props={isSelected} onClick={clickHandler}>二個目のボタン</Styledbutton>
      <Aquabutton>こんにちわ</Aquabutton>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
