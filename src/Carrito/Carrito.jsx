import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../context/CarritoProvider";
import { total } from "../helper/helper";
import CarritoItem from "./CarritoItem";
export default function Carrito() {
  const { agregados, deleteItem } = useContext(CarritoContext);
  const navigate = useNavigate();

  useEffect(() => {}, [agregados]);

  return (
    <>
      <div className="bg-indigo-400 w-full h-screen flex flex-col items-center gap-10">
        <button
          onClick={() => navigate("/")}
          className="bg-white font-bold px-2 border-zinc-500 absolute left-3/4  rounded-full"
        >
          X
        </button>
        <h1 className="text-3xl  font-bold">Mi Carrito</h1>
        <div className="relative ml-96"></div>
        <div className="flex flex-wrap justify-center items-center space-x-5 bg-indigo-100 p-10 rounded-lg">
          {agregados.length > 0
            ? agregados.map((item) => (
                <CarritoItem item={item} deleteItem={deleteItem} />
              ))
            : "El Carrito esta vacío"}
        </div>
        {agregados.length > 0 && (
          <div className="bg-indigo-300 p-10 rounded-lg  font-bold">
            Total a abonar:$
            {total(agregados)}
          </div>
        )}
      </div>
    </>
  );
}
