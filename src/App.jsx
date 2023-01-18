import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import BuscarBebida from "./components/api";
import { useEffect } from "react";
import Buscador from "./components/Buscador";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {" "}
      <Buscador />{" "}
    </div>
  );
}

export default App;
