import { useEffect, useState } from "react";

function NavegadorPersonajes() {
  const [id, setId] = useState(1);
  const [personaje, setPersonaje] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function cargarPersonaje() {
      setCargando(true);
      setError("");
      try {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
          signal: controller.signal,
        });
        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        setPersonaje(datos);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message || "No se pudo cargar el personaje");
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargarPersonaje();

    return () => controller.abort();
  }, [id]);

  return (
    <div>
      <div className="botones">
        <button onClick={() => setId(prev => Math.max(1, prev - 1))}>Anterior</button>
        <span>id: {id}</span>
        <button onClick={() => setId(prev => prev + 1)}>Siguiente</button>
      </div>

      {cargando && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {!cargando && !error && personaje && (
        <div className="personaje">
          <img src={personaje.image} alt={personaje.name} />
          <h3>{personaje.name}</h3>
          <p>Especie: {personaje.species}</p>
          <p>Estado: {personaje.status}</p>
        </div>
      )}
    </div>
  );
}

export default NavegadorPersonajes;
