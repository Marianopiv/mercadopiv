import { Fragment, useContext, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  DesktopComputerIcon,
  TruckIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import logo from "../Assets/Imagenes/Screenshot_2.png";
import CarritoIcon from "../Assets/Icons/CarritoIcon";
import { Link, NavLink, useNavigate } from "react-router-dom";
import spinner from "../DinamicCategories/spinner.png";
import { LayoutContext } from "../context/LayoutProvider";

const solutions = [
  {
    name: "Vehiculos",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: TruckIcon,
  },
  {
    name: "Heladeras",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: OfficeBuildingIcon,
  },
  {
    name: "Televisores",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: DesktopComputerIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const {isMobile} = useContext(LayoutContext)
  const navigate = useNavigate();
  const [cambioCategoria, setCambioCategoria] = useState(null);

  console.log(isMobile)
  const handleChange = (e) => {
    setCambioCategoria(e);
  };
  return (
    <>
      <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div
              onClick={() => navigate("/")}
              className="hover:cursor-pointer flex justify-start items-center lg:w-0 lg:flex-1"
            >
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10 hover:cursor-pointer"
                src={logo}
                alt=""
              />
              <h1 className="font-bold">MercadoPivo</h1>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Popover.Group
              as="nav"
              className="hidden md:flex space-x-10 items-center"
            >
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span>Buscar por categoría</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10  mt-3 transform max-w-md sm:px-0 lg:ml-0 ">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative flex-col items-center justify-center gap-10 bg-white py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <a
                                onClick={() => handleChange(item.name)}
                                key={item.name}
                                href={item.href}
                                className="-m-4 px-4 py-6 flex rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="pl-2">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <div className="flex items-center">
                <div className="flex gap-10 px-10">
                  <Link
                    onClick={setTimeout(() => {
                      <img
                        className="animate-spin h-32 w-32"
                        src={spinner}
                        alt=""
                      />;
                    }, 500)}
                    disabled={!cambioCategoria}
                    className={
                      !cambioCategoria
                        ? " bg-violet-500 opacity-20 text-white p-2 rounded-md"
                        : "hover:bg-violet-600 bg-indigo-600 text-white p-2 rounded-md"
                    }
                    to={
                      cambioCategoria
                        ? `/dinamic-categories/${cambioCategoria}`
                        : `/`
                    }
                  >
                    BUSCAR
                  </Link>
                </div>
              </div>
            </Popover.Group>
            <div className="sm:flex sm:flex-row-reverse sm:mx-auto md:flex items-center justify-end md:flex-1 lg:w-0">
              <div className="hover:cursor-pointer hover:opacity-80">
                <NavLink to="/Carrito">
                  <CarritoIcon />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div
                    className="hover:cursor-pointer flex"
                    onClick={() => navigate("/")}
                  >
                    <img className="h-8 w-auto" src={logo} alt="Workflow" />
                    <h1 className="font-bold">MercadoPivo</h1>
                    
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        onClick={() => handleChange(item.name)}
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                    <div>
                      <Link
                        onClick={setTimeout(() => {
                          <img
                            className="animate-spin h-32 w-32"
                            src={spinner}
                            alt=""
                          />;
                        }, 500)}
                        disabled={!cambioCategoria}
                        className={
                          !cambioCategoria
                            ? " bg-violet-500 opacity-20 text-white p-2 rounded-md"
                            : "hover:bg-violet-600 bg-indigo-600 text-white p-2 rounded-md"
                        }
                        to={
                          cambioCategoria
                            ? `/dinamic-categories/${cambioCategoria}`
                            : `/`
                        }
                      >
                        BUSCAR
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
