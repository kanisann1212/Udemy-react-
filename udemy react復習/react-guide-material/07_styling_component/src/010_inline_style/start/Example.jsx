import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);
    const buttonstyle ={
        width: 120,
        height: 60,
        display:"block",
        fontWeight:"bold",
        "border-radius":9999,
        cusor: "boiter",
        border: "none",
        margin: "auto",
        background:isSelected ? "pink":""
    }

    return (
        <>
            <button onClick={clickHandler} style={buttonstyle}>ボタン</button>
            <div style={{ textAlign:"center"}}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
