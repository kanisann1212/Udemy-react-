import { Mycontext } from "../Example";
import { useContext } from "react";

const GrandChild = () => {
  const value = useContext(Mycontext)
  return (
      <div style={{ border: "1px solid black" }}>
        <h3>孫コンポーネント</h3>
        {value}
      </div>
  );
};
export default GrandChild;
