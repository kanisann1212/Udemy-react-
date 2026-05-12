import { reducer } from "./modules/counter"
import { configureStore} from "@reduxjs/toolkit"
import reducer from "./modules/counter";


export default createStore(reducers);

export default configureStore({
  reducer:{
    counter:reducer
  }
});
