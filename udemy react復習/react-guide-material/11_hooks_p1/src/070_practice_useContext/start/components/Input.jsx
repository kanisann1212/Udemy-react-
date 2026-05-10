import { useCalcDispatch, useCalcState } from "../context/CalcContext";

export const Input = ({ name }) => {
  const dispatch = useCalcDispatch()
  const state = useCalcState()
  const numChangeHandler = (e) => {
    dispatch({ 
      type: 'change', 
      payload: { name: e.target.name, value: e.target.value } 
    });
  };
  return (
      <div>
        {name}:
        <input
          type="number"
          name={name}
          value={state[name]}
          onChange={numChangeHandler}
        />
      </div>
  )
}