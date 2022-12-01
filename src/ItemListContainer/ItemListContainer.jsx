import ItemList from "../ItemList/ItemList";
import { productos } from "../Config/Constantes";

export default function ItemListContainer() {

  return (
    <>
      <ItemList productos={productos} />         
    </>
  );
}

//Tarea para el lunes
//Lograr que todos los items tengan botones que digan ver mas.
//Cada item debe tener una pequeña descripcion,stock,precio,
//Despues hacerle un componente ItemDetailContainer
//Otro que se llame item Detail.(Ver ejemplo de cuando clickeas un producto en mercado libre, lo que hay adentro va a ser el item detail)
//Hacer lo mismo pero como si fuese objeto. Voy a tener que tener otro tipo objeto que tenga imagen texto y todo eso, y pasarle de itemDetail container a Item Detail


