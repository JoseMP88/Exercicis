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
        <div className="display">{display}</div>
        <div className="botons">
          <div className="boton1">
            <button onClick={() => resta()}> -1</button>
            <br />
          </div>
          <div className="boton2">
            <button onClick={() => suma()}> +1</button>
            <br />
          </div>
          <div className="boton3">
            <br />
            <button className="sumarcinc" onClick={() => sumaCinc()}>
              +5
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contador;
