import { useState } from "react";

export default function Graella() {
  const fotos = [
    "https://randomuser.me/api/portraits/men/37.jpg",
    "https://randomuser.me/api/portraits/men/38.jpg",
    "https://randomuser.me/api/portraits/men/48.jpg",
    "https://randomuser.me/api/portraits/men/18.jpg",
    "https://randomuser.me/api/portraits/men/28.jpg",
    "https://randomuser.me/api/portraits/men/58.jpg",
  ];
  const [fotoACanviar, setFotoACanviar] = useState(null);
  const [cssClass, setCssClass] = useState("fotoPetita");

  const size = (fotoClicada) => {
    setFotoACanviar(fotoClicada);
    cssClass === "fotoPetita"
      ? setCssClass("fotoGran")
      : setCssClass("fotoPetita");
  };

  return (
    <div className="Graella">
      <div className="fotos">
        {fotos.map((foto) => (
          <img
            alt="hola"
            className={foto === fotoACanviar ? cssClass : "fotoPetita"}
            key={foto}
            src={foto}
            width="30%"
            height="30%"
            onClick={() => size(foto)}
          />
        ))}
      </div>
    </div>
  );
}
