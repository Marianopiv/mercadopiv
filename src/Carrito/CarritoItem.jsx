import React from "react";

const CarritoItem = ({ item, deleteItem }) => {
  return (
    <>
      <div className="text-centerborder-indigo-600 border-2 p-2 rounded-lg flex justify-center flex-col items-center ">
        <h2 className="text-2xl font-bold">{item.nombre}</h2>
        <p> x{item.cantidad}</p>
        <p>{item.precio * item.cantidad}</p>
        <img
          className="w-40 h-40 object-contain mt-2 rounded-lg"
          src={item.img}
          alt=""
        />
        <button
          className="text-center p-2 bg-indigo-600 rounded-md text-white hover:text-indigo-600 hover:bg-white"
          onClick={() => deleteItem(item)}
        >
          Eliminar del carrito
        </button>
      </div>
    </>
  );
};

export default CarritoItem;
