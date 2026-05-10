import { UseCounterDispatch } from "../CounterContext/CounterContext";

const CounterButton = ({calcType, step}) => {
    const dispatch = UseCounterDispatch();
    const clickHandler = ()=>{
          dispatch({ type: calcType, step: step });
    }
    
    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;