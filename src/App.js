import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Nav from "./components/Nav/Nav";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Footer from "./components/Footer/Footer";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Shop from './components/Shop/Shop'
import ProductView from './components/ProductView/ProductView';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logowanie" element={<LogIn />} />
          <Route path="/Rejestracja" element={<Register />} />
          <Route path="/sklep" element={<Shop />} />
          <Route path="/sklep/:id" element={<ProductView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
