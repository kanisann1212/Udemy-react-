import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { asyncCount } from "../../api/counter"

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    status: ''
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    }
  },
  extraReducers: (buider) => {
    buider.addCase(addAsyncwithStatus.pending, (state) => {
      state.status = 'ロード中'
    })
    .addCase(addAsyncwithStatus.fulfilled, (state,action) => {
      state.status = '取得済み'
      state.count = state.count + action.payload
    })
    .addCase(addAsyncwithStatus.rejected, (state,payload) => {
      state.status = '取得に失敗しました'
    })
  }
  //↑ 非同期処理中の処理別の文字表示の関数を設定するところ
});

const { add, minus } = counter.actions;

const addAsyncwithStatus = createAsyncThunk(
  'counter/AsyncCount',
  async (payload) => {
    const response = await asyncCount(payload);
    return response.data;
  }
)
// ↑tookkitを使ったthunkの記述、非同期処理をする関数

const addAsync = (payload) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    const response = await asyncCount(payload);
    dispatch(add(response.data));
  }
} 
// ↑素のthunkの記述、非同期処理をする関数


export { add, minus, addAsync,addAsyncwithStatus }
export default counter.reducer