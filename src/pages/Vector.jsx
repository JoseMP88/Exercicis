import { useState } from "react";

function Vector() {
  const numeros = [7, 2, 10, 20, 5, 6, 8];

  const [ValorMin, setValorMin] = useState(Math.min(...numeros));
  const [ValorMax, setValorMax] = useState(Math.max(...numeros));

  let suma = numeros.reduce((valor, index) => (valor += index)); //coje todos los valores del array
  let mitjana = suma / numeros.Length;
  let resultat = mitjana.toFixed(2);

  return (
    <div className="App">
      <div className="Vector">
        {numeros.map((numero) => (
          <p>{numero}</p>
        ))}
      </div>
      <div className="Valores">Valor Minim: {ValorMin}</div>
      <div className="Valores">Valor Maxim: {ValorMax}</div>
      <div className="Valores">Mitjana: {resultat}</div>
      <div className="Valores">Suma Total: {suma}</div>
    </div>
  );
}

export default Vector;
