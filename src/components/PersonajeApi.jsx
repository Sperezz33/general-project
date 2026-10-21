import { useEffect, useState } from "react";

function PersonajeApi() {
  const [personaje, setPersonaje] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarPersonaje() {
      try {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character/1");
        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        setPersonaje(datos);
      } catch (err) {
        setError(err.message || "No se pudo cargar el personaje");
      } finally {
        setCargando(false);
      }
    }

    cargarPersonaje();
  }, []);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="personaje">
      <img src={personaje.image} alt={personaje.name} />
      <h3>{personaje.name}</h3>
      <p>Especie: {personaje.species}</p>
      <p>Estado: {personaje.status}</p>
    </div>
  );
}

export default PersonajeApi;
