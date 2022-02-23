import { useState } from "react";

function Afegir() {
  let arrayNums = [7, 2, 10, 20, 5, 6, 8];
  const [numeros, setNumeros] = useState(arrayNums);
  const [valorIntroduit, setValorIntroduit] = useState("");

  const click = () => {
    let newArray = numeros;
    newArray.push(parseInt(valorIntroduit));
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
        <button onClick={click}>Introduir</button> <br />
        {valorIntroduit}
      </div>
    </div>
  );
}

export default Afegir;
