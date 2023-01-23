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
      <div className="bg-indigo-400 w-full h-screen flex flex-col items-center gap-10 pt-2">
        <button
          onClick={() => navigate("/")}
          className="font-bold px-2 border-zinc-500 absolute right-8  rounded-md bg-red-500 text-white"
        >
          X
        </button>
        <h1 className="text-3xl  font-bold tracking-widest">Mi Carrito</h1>
        <div className="relative ml-96"></div>
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-10 items-center  sm:bg-indigo-100 bg-indigo-100 p-8 rounded-lg z-50 ${
            agregados.length > 0 ? "h-auto" : "h-auto"
          }  text-center`}
        >
          {agregados.length > 0
            ? agregados.map((item) => (
                <CarritoItem item={item} deleteItem={deleteItem} />
              ))
            : "El Carrito esta vacío"}
        {agregados.length > 0 && (
            <div className="bg-indigo-300 p-8 my-14 h-auto  rounded-lg font-bold w-3/4 flex text-center justify-center sm:hidden">
              <p>
                Total a abonar:$
                {total(agregados)}
              </p>
            </div>
          )}
        <div className="w-screen z-50 flex justify-center">
          {agregados.length > 0 && (
            <div className="bg-indigo-300 p-10 sm:p-10 rounded-lg font-bold sm:flex hidden mb-4 ">
              <p>
                Total a abonar:$
                {total(agregados)}
              </p>
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  );
}
