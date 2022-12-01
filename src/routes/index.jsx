import { BrowserRouter, Routes, Route } from "react-router-dom";
import DinamicPage from "../DinamicPage/DinamicPage";
import Carrito from "../Carrito/Carrito";
import ItemList from "../ItemList/ItemList";
import WithNavbar from "../Layout/WithNavbar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import DinamicCategories from "../DinamicCategories/DinamicCategories";
const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithNavbar />}>
          <Route index element={<ItemListContainer />} />
          <Route path="item-list" element={<ItemList />} />
          <Route path="dinamic-page/:id" element={<DinamicPage />} />
          <Route
            path="dinamic-categories/:categoria"
            element={<DinamicCategories />}
          />
        </Route>
        <Route path="/Carrito" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
