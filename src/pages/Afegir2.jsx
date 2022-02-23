import { useState } from "react";

function Afegir2() {
  let arrayNums = [7, 2, 10, 20, 5, 6, 8];
  const [numeros, setNumeros] = useState(arrayNums);
  const [valorIntroduit, setValorIntroduit] = useState("");
  const [indexIntroduit, setIndexIntroduit] = useState("");

  const click = () => {
    let newArray = numeros;
    newArray.splice(indexIntroduit, 0, valorIntroduit);
    setNumeros([...newArray]);
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
        <label htmlFor="numero">Introdueix un Valor</label> <br />
        <input
          type="number"
          maxLength="8"
          size="10"
          required
          min="0"
          value={valorIntroduit}
          onChange={(event) => setValorIntroduit(event.target.value)}
        />
        <br />
        <label htmlFor="posicio">Introdueix la posicio</label> <br />
        <input
          type="number"
          maxLength="5"
          size="5"
          required
          min="0"
          value={indexIntroduit}
          onChange={(event) => setIndexIntroduit(event.target.value)}
        />
        <br />
        <button onClick={click}>Introduir</button> <br />
        valor: {valorIntroduit} <br />
        posicio:{indexIntroduit}
      </div>
    </div>
  );
}

export default Afegir2;
