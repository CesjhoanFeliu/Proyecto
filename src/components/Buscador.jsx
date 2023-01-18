import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { BuscarBebida } from "./api";

//usamos use state para enseñarlo en pantalla y tomar el valor del
// del onChance
const Buscador = () => {
  const [busqueda, setBusqueda] = useState();
  const [bebida, SetBebida] = useState();

  const Change = (e) => {
    setBusqueda(e.target.value);
  };

  //Usamos la API y es asyncrono
  const Click = async (e) => {
    const data = await BuscarBebida(busqueda);
    SetBebida(data);
    console.log(bebida);
  };

  return (
    <div>
      <input type="text" onChange={Change} placeholder="Busca tu Cocktel" />
      <div>
        <button onClick={Click}>Buscar</button>
      </div>
    </div>
  );
};

export default Buscador;
