import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Shop from "./components/Shop/Shop";
import ProductView from "./components/ProductView/ProductView";
import DiscoveryPlantSearch from "./components/DiscoveryPlantSearch/DiscoveryPlantSearch";
import { useDispatch } from "react-redux";
import { set_items } from "./stores/plantsStore";
import { noAuth } from "./api/FetchData";
import Basket from "../src/screens/Basket/Bakset";
import MakeOrder from "./screens/MakeOrder/MakeOrder";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    noAuth.plants().then((el) => dispatch(set_items(el.data)));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logowanie" element={<LogIn />} />
          <Route path="/Rejestracja" element={<Register />} />
          <Route path="/sklep" element={<Shop />} />
          <Route path="/sklep/:id" element={<ProductView />} />
          <Route path="/OdkryjRosline" element={<DiscoveryPlantSearch />} />
          <Route path="/koszyk" element={<Basket />} />
          <Route path="/zlozZamowienie" element={<MakeOrder />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
