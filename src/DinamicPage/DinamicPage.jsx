import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productos } from "../Config/Constantes";
import { CarritoContext } from "../context/CarritoProvider";
import { isInCart } from "../helper/helper";
import spinner from "./spinner.png";
const DinamicPage = () => {
  const { id } = useParams();
  const {agregar,agregados} = useContext(CarritoContext)

  const [producto, setProducto] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setProducto(productos.find((prod) => prod.id === id));
    }, 1000);
  });

  const [cantidad, setCantidad] = useState(1);
  const sumar = () => {
    cantidad < producto.stock && setCantidad(cantidad + 1);
  };
  const restar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const navigate = useNavigate();

  const addToCart = () => {
    agregar({...producto, cantidad})
  }
  return (
    <>
      {!producto ? (
        <div className="flex justify-center items-center w-screen">
          <button type="button" className="p-3 mt-48" disabled>
            <img className="animate-spin h-32 w-32" src={spinner} alt="" />
            <p className="p-3">Processing... </p>
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-screen h-5/6 bg-white">
            <div className="flex justify-end">
              <button
                onClick={() => navigate("/")}
                className="bg-red-500 rounded-md hover:bg-pink-600 text-white  px-3 mr-3 py-1"
              >
                X
              </button>
            </div>
            <div className="columns-2 flex flex-wrap h-auto w-auto sm:w-screen justify-center gap-x-80 gap-y-16 ">
              <div className="flex justify-center items-start">
                <img className="max-w-xs max-h-96 object-contain sm:max-w-md sm:max-h-96" src={producto.img} alt="" />
              </div>
              <div className="flex flex-col items-center space-y-5 border-gray-400 border rounded-md p-3 text-center">
                <h1 className="text-4xl font-bold">{producto.nombre}</h1>
                <h2 className="text-3xl">${producto.precio}</h2>
                <h2>Stock disponible: {producto.stock}</h2>
                <div className="flex flex-col text-center gap-5">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center gap-5">
                      <img
                        className="max-h-8 max-w-xs"
                        src="https://abstorages.com/wp-content/uploads/2020/10/nosotros-blurb-truck.png"
                        alt=""
                      />
                      <img
                        className="max-h-6 max-w-xs rotate-180"
                        src="https://cdn-icons-png.flaticon.com/512/190/190305.png"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-center gap-5">
                      <p className="text-green-500">Llega mañana por $500</p>
                      <p className="text-green-500">Devolución gratis</p>
                    </div>
                  </div>
                  <p>Tenés 30 días desde que lo recibís.</p>
                </div>
                <div className="">
                  <div className="flex justify-center space-x-8 mb-5">
                    <button
                      onClick={sumar}
                      className="border rounded-md px-2 bg-indigo-500 font-bold text-white"
                    >
                      +
                    </button>
                    <p>{cantidad}</p>
                    <button
                      onClick={restar}
                      className="border rounded-md px-2 bg-indigo-500 font-bold text-white"
                    >
                      -
                    </button>
                  </div>
                  <button onClick={addToCart} disabled={isInCart(agregados,id)} className={isInCart(agregados,id)?"bg-indigo-600 opacity-20 text-white p-3 rounded-md":"bg-indigo-600 text-white p-3 rounded-md"}>
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DinamicPage;
