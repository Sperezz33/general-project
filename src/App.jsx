import ContadorClics from "./components/ContadorClics";
import Cronometro from "./components/Cronometro";
import RecordarNombre from "./components/RecordarNombre";
import PersonajeApi from "./components/PersonajeApi";
import NavegadorPersonajes from "./components/NavegadorPersonajes";

function App() {
  return (
    <main>
      <h1>Taller de useEffect</h1>

      <section>
        <h2>1. Contador de clics</h2>
        <ContadorClics />
      </section>

      <section>
        <h2>2. Cronómetro</h2>
        <Cronometro />
      </section>

      <section>
        <h2>3. Recordar nombre</h2>
        <RecordarNombre />
      </section>

      <section>
        <h2>4. Personaje de la API</h2>
        <PersonajeApi />
      </section>

      <section>
        <h2>5. Navegador de personajes</h2>
        <NavegadorPersonajes />
      </section>
    </main>
  );
}

export default App;
