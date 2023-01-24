import { Link } from "react-router-dom";
export default function Item({
  item,
  item: { nombre, precio, img,id},
  agregar,
}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-5 border-solid border-2 rounded-md border-indigo-600 p-3 hover:bg-indigo-600 hover:opacity-50 hover:text-white hover:cursor-pointer bg-indigo-100 w-64 text-center">
        <div className="text-2xl font-bold">{nombre}</div>
        <div className="text-2xl font-bold">${precio}</div>
        <div className="rounded-sm flex flex-col space-y-3">
          <img
            className="rounded-md hover:bg-indigo-600 hover: hover:opacity-30 hover:cursor-pointer max-h-24 w-44 object-contain"
            src={img}
            alt=""
          />

          <Link agregar={agregar} item={item}
            className="text-center p-2 bg-indigo-600 rounded-md text-white hover:text-indigo-600 hover:bg-white"
            to={`/dinamic-page/${id}`}
          >
            Ver Mas
          </Link>
        </div>
      </div>
    </>
  );
}
