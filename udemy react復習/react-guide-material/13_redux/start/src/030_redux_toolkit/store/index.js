import { configureStore} from "@reduxjs/toolkit"
import reducer from "./modules/counter";


export default configureStore({
  reducer:{
    counter: reducer
    // ↑これには好きなプロパティ名とスライスから取り出したreducerを紐付けて登録する
  }
});
