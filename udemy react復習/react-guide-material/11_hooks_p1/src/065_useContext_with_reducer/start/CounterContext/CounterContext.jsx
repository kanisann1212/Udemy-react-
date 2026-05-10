import { createContext, useContext, useReducer } from "react";
export const CounterState = createContext()
export const CounterDispatch = createContext()

export const CounterContext = ({ children }) => {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error('不明なactionです。')
    }
  }, 0);

  return (
    <CounterState.Provider value={state}>
      <CounterDispatch.Provider value={dispatch}>
        {children}
      </CounterDispatch.Provider>
    </CounterState.Provider>
  )
}

export const UseCounterState = () => useContext(CounterState)
export const UseCounterDispatch = () => useContext(CounterDispatch)