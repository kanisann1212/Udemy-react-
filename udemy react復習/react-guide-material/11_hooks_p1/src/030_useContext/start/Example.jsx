import { createContext } from "react";
import Child from "./components/Child";

export const Mycontext = createContext("こんにちわ");
const Example = () => {
  const value = 'hello'
  return <Child value={value}/>;
};

export default Example;
