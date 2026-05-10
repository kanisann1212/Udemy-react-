import { UseCounterState } from "../CounterContext/CounterContext";

const CounterResult = () => {
  const state =UseCounterState()
  return <h3>{state}</h3>;
};

export default CounterResult;