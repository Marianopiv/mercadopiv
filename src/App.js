import "./App.css";
import CarritoProvider from "./context/CarritoProvider";
import LayoutProvider from "./context/LayoutProvider";
import Rutas from "./routes";

function App() {
  return (
    <>
      <LayoutProvider>
      <CarritoProvider>
        <Rutas />
      </CarritoProvider>
      </LayoutProvider>
    </>
  );
}

export default App;

//Tarea, transformar el ecomerce con useContext

//Porque no se desactiva el filtro si cambioCategoria lo tengo negado (!cambioCategoria)

//Porque mi reduce si lo tengo en un useeffect y tengo entre corchetes a que funcion tiene que apuntar para volver a iniciarse, no se actualiza?