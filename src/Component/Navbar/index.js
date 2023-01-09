import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

const pizzaLogoLink = "https://cdn-icons-png.flaticon.com/512/3595/3595458.png";

export default function index() {
  // const { cart } = useSelector((state) => state.cart);

  return (
    <Navbar color="dark" dark>
      <NavbarBrand href="/">
        <img
          alt={"pix=zza-logo"}
          src={pizzaLogoLink}
          style={{
            height: 40,
            width: 40,
          }}
        />
        Pizza Delivero
      </NavbarBrand>
      <div id="link-container">
        <Link to={"/"}>Pizza's</Link>
        <Link to={"/orders"}>Orders</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </Navbar>
  );
}
