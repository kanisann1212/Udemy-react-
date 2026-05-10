import Counter from "./components/Counter";
import { CounterContext } from "./CounterContext/CounterContext";

// POINT useContext x useReducer
const Example = () => {

  return (
    <CounterContext>
      <Counter />
    </CounterContext>
  );
};

export default Example;
