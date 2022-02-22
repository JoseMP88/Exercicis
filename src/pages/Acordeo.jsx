import { useState } from "react";

export default function Acordeo() {
  const [actual, setActual] = useState(0);

  return (
    <div className="App">
      <h2 onClick={() => setActual(1)}>Titol 1</h2>
      <p className={actual === 1 ? "visible" : "ocult"}>Contingut 1</p>
      <h2 onClick={() => setActual(2)}>Titol 2</h2>
      <p className={actual === 2 ? "visible" : "ocult"}>Contingut 2</p>
      <h2 onClick={() => setActual(3)}>Titol 3</h2>
      <p className={actual === 3 ? "visible" : "ocult"}>Contingut 3</p>
    </div>
  );
}
