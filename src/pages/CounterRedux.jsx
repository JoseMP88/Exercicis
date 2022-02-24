import { getCount, increment, reset } from "./Counter";
import { useDispatch, useSelector } from "react-redux";

export default function CounterRedux() {
  const count = useSelector(getCount);
  const dispatch = useDispatch();

  return (
    <>
      <h1> Contador Redux</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(-1))}> -1</button>
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </>
  );
}
