import { createSlice } from "@reduxjs/toolkit";

const reducerTest = createSlice({
  name:'counter',
  initialState: {count:0},
  // ↑
  // stateがオブジェクト・配列など不変性を保持するための記述をしなけばならないときはreduxは純粋関数でなければいけないのでしっかり記述する
  // ↓
  reducers:{
    add(state,{payload}){
      state.count = state.count + payload
      // ↑Immerライブラリのおかげで不変性を損なう書き方でもtoolkitではできる
      // const newState = {...state}
      // newState.count = state.count + payload
      // return newState
    },
    minus(state, {payload}){
      state.count = state.count - payload
      // ↑Immerライブラリのおかげで不変性を損なう書き方でもtoolkitではできる
      // const newState = {...state}
      // newState.count = state.count - payload
      // return newState
    }
  },
})

const { add, minus } =reducerTest.actions
export { add, minus }
export default reducerTest.reducer
// ↑作ったスライスのルールブック(reducer)だけ取りだせればよいので.reducerで取り出して渡している。 
// ちなみにexport defaultは呼び出した側(import)側で名前を決めれる
// また複数スライスを作成するときはスライスごとにファイルを分けるのが慣習