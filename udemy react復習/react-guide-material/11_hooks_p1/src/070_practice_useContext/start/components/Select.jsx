import { useCalcDispatch, useCalcState } from "../context/CalcContext";


export const Select = () => {
  const state = useCalcState()
  const dispatch = useCalcDispatch()
  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };
  const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];
  return (
    <select value={state.type} name="type" onChange={calculate}>
      {CALC_OPTIONS.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>

  )
}