import React from "react";
import "./App.css";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
