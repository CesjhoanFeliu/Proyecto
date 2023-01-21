import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { BuscarBebida } from "./api";
import Card from "./card";
import Spinner from "./Spinner";

//usamos use state para enseñarlo en pantalla y tomar el valor del
// del onChance
const Buscador = () => {
  const [busqueda, setBusqueda] = useState("");
  const [bebida, setBebida] = useState();
  const [loading, setloading] = useState(true);

  const Change = (e) => {
    setBusqueda(e.target.value);
  };

  //Usamos la API y es asyncrono
  const Click = async () => {
    const data = await BuscarBebida(busqueda);
    setBebida(data);
    console.log(data);
    setloading(false);
  };
  useEffect(() => {
    Click();
  }, []);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <form className="input-group">
            <input
              type="text"
              onChange={Change}
              placeholder="Busca tu Cocktel"
              className="form-control"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              data-mdb-ripple-color="dark"
              onClick={Click}
            >
              Buscar
            </button>
          </form>
        </div>
      </nav>

      <div className="container content-card">
        {loading ? (
          <Spinner />
        ) : (
          <div className="espacio drink-grid">
            {bebida &&
              bebida.map((bebida) => (
                <Card
                  name={bebida.strInstructions}
                  img={bebida.strDrinkThumb}
                  title={bebida.strDrink}
                  alcoholic={bebida.strAlcoholic}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
// <div>{bebida.map((bebida) => {})}</div>
export default Buscador;
