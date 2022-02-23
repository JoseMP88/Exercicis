import { useState } from "react";

function NoRepetits() {
  let arrayNums = [7, 2, 10, 20, , 2, 2, 5, 2, 6, 8];
  const [numeros, setNumeros] = useState(arrayNums);

  const unicos = () => {
    let nouArray = new Set(arrayNums);
    let arraySenseRepetits = [...nouArray];
    setNumeros([...arraySenseRepetits]);
  };

  const MapaArray = (
    <div className="Vector">
      {numeros.map((numero, index) => (
        <p key={index}>{numero}</p>
      ))}
    </div>
  );

  return (
    <div className="App">
      {MapaArray}
      <div className="Introduir">
        <button onClick={unicos}>Treure Valors Repetits</button> <br />
      </div>
    </div>
  );
}

export default NoRepetits;
