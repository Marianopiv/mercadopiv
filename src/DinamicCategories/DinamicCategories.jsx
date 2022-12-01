import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productos } from "../Config/Constantes";
import Item from '../Item/Item';
import spinner from "../DinamicCategories/spinner.png";

const DinamicCategories = () => {
    const { categoria } = useParams();

    const [producto, setProducto] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProducto(productos.filter((prod) => prod.categoria === categoria ));
    }, 1000);
  });

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
        <div className='flex gap-10 justify-center flex-wrap'>{producto.map((item) => (
          <div key={item.id}>
            <Item key={item.id} item={item} />
          </div>))}</div>)}
    </>
  )
}

export default DinamicCategories