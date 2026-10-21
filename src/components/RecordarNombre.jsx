import { useEffect, useState } from "react";

function RecordarNombre() {
  const [nombre, setNombre] = useState(() => localStorage.getItem("nombre") ?? "");

  useEffect(() => {
    localStorage.setItem("nombre", nombre);
  }, [nombre]);

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p>Hola, {nombre}</p>
    </div>
  );
}

export default RecordarNombre;
