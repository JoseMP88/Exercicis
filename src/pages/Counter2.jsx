import { useReducer } from "react";
import { counter, increment, reset } from "./Counter";
import { createStore } from "redux";

const store = createStore(counter, 0);

export default function Counter2() {
  const [count, dispatch] = useReducer(counter, 0);

  return (
    <>
      <h1> Contador</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(-1))}> -1</button>
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </>
  );
}
