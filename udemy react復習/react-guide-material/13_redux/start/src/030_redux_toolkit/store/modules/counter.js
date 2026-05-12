import { createSlice } from "@reduxjs/toolkit";

const reducerTest = createSlice({
  name:'counter',
  initialState: 0,
  reducers:{
    add(state,{payload}){
      return state + payload
    },
    minus(state, {payload}){
      return state - payload
    }
  },
})

const { add, minus } =reducerTest.actions
export { add, minus }
export default reducerTest.reducer
// ↑作ったスライスのルールブック(reducer)だけ取りだせればよいので.reducerで取り出して渡している。 
// ちなみにexport defaultは呼び出した側(import)側で名前を決めれる