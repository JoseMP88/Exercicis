import { useState } from "react";

export default function Carrusel() {
  const fotos = [
    "https://randomuser.me/api/portraits/men/37.jpg",
    "https://randomuser.me/api/portraits/men/38.jpg",
    "https://randomuser.me/api/portraits/men/48.jpg",
    "https://randomuser.me/api/portraits/men/18.jpg",
    "https://randomuser.me/api/portraits/men/28.jpg",
    "https://randomuser.me/api/portraits/men/58.jpg",
  ];

  const [ImatgeActual, setImatgeActual] = useState(null);

  return (
    <div className="Graella">
      <div className="fotos">
        <button> Anterior </button>
        <div className="imagen">
          {fotos.map((foto) => (
            <img alt="hola" key={foto} src={foto} className="carrusel" />
          ))}
        </div>

        <button className="carruselbutton"> Siguiente</button>
      </div>
    </div>
  );
}
