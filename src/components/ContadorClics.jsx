import { useEffect, useState } from "react";

function ContadorClics() {
  const [clics, setClics] = useState(0);

  useEffect(() => {
    document.title = `Clics: ${clics}`;
  }, [clics]);

  return (
    <button onClick={() => setClics(clics + 1)}>
      Clics: {clics}
    </button>
  );
}

export default ContadorClics;
