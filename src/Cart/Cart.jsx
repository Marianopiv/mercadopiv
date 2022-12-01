import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import CarritoIcon from "../Assets/Icons/CarritoIcon";

const Cart = () => {
  return (
    <Fragment>
      <div className="sm:flex sm:flex-row-reverse sm:mx-auto md:flex items-center justify-end md:flex-1 lg:w-0">
        <div className="hover:cursor-pointer hover:opacity-80">
          <NavLink to="/Carrito">
            <CarritoIcon />
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
