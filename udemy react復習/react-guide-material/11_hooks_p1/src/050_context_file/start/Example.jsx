import "./Example.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Tycon } from "./context/Tycontext";

const Example = () => {  
  return (
    <Tycon>
      <Header />
      <Main />
    </Tycon>
  );
};

export default Example;


// ※すべてを読み込むファイル