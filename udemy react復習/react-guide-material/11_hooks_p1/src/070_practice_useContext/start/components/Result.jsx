import { useCalcState } from "../context/CalcContext"

export const Result = () =>{
  const state = useCalcState()
  return  <h3>結果：{state.result}</h3>
}