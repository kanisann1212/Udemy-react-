import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"
import { add,minus } from "../store/modules/counter";
import { addAsyncwithStatus } from "../../060_createAsyncThunk/store/modules/counter";
import { useSelector } from "react-redux";

const Counter = () => {
    const status = useSelector(state =>state.counter.status)
    return (
        <>
            <CounterResult />
            <CounterButton step={2} calcType="+" actionCreater = {add}/>
            <CounterButton step={2} calcType="-" actionCreater = {minus}/>
            <CounterButton step={2} calcType="非同期(+)" actionCreater = {addAsyncwithStatus}/>
            <h3>{status}</h3>
        </>
    )
}
export default Counter;