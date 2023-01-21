export const BuscarBebida = async (bebida) => {
  try {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${bebida}`;
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    !alert("No se encontro nada");
  }
};

export default BuscarBebida;
