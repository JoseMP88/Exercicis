import { useState } from "react";

function Contador() {
  const [display, setDisplay] = useState(0);

  const resta = () => {
    if (display > 0) return setDisplay(display - 1);
    else return setDisplay(display);
  };

  const suma = () => {
    if (display >= 0 && display < 10) return setDisplay(display + 1);
    else return setDisplay(display);
  };

  const sumaCinc = () => {
    if (display >= 0 && display < 6) return setDisplay(display + 5);
    else return setDisplay(display);
  };

  return (
    <div className="App">
      <div className="comptador">
        Contador: {display}
        <br />
        <button onClick={() => resta()}> -1</button>
        <button onClick={() => suma()}> +1</button>
        <button className="sumarcinc" onClick={() => sumaCinc()}>
          +5
        </button>
      </div>
    </div>
  );
}

export default Contador;
