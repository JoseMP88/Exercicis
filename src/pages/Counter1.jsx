import { useState } from "react";

export default function Counter() {
  const counter = (state) => state + 1;
  const [count, setCount] = useState(0);
  //const [state, setState] = useState(initialState);
  //Reducer => const [state, dispatch] = useReducer(reducer, initialArg, init);
  return (
    <>
      <h1> Contador</h1>
      <div>{count}</div>
      <button onClick={() => setCount(counter)}> +1</button>
    </>
  );
}
