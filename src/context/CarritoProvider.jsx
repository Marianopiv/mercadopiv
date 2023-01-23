import React, { useState } from "react";
import { createContext } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [agregados, setAgregados] = useState([]);

  const agregar = (agregado) => {
    setAgregados([...agregados, agregado]);
  };

  const deleteItem = (item) => {
    setAgregados((prevState) =>
      prevState.filter((agregado) => agregado !== item)
    );
  };
  return (
    <CarritoContext.Provider value={{ agregados, agregar, deleteItem }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
