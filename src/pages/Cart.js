import React from "react";
import CartListingCard from "../Component/Card/CartListingCard";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const { items = [] } = useSelector((state) => state.cart);
  return (
    <div className="app_container d-flex">
      <div className="cart-product-listing p-5">
        <h3 className="mb-3">Cart Items (3)</h3>
        <div className="cart-listing">
          {items &&
            items.map((item, i) => <CartListingCard key={i} data={item} />)}
        </div>
      </div>
      <div className="cart-price-calculator px-3 py-5">
        <h3 className="mb-2">Total</h3>
        <div className="" id="bill-listings">
          <ul>
            <li className="d-flex align-center justify-content-between">
              <p>Margheritta x 2</p>
              <p className="fw-bold">200</p>
            </li>
            <li className="d-flex align-center justify-content-between">
              <p>Margheritta x 2</p>
              <p className="fw-bold">200</p>
            </li>
          </ul>
        </div>
        <div className="" id="tax-listings">
          <ul>
            <li className="d-flex align-center justify-content-between">
              <p>C-GST</p>
              <p className="fw-bold">9%</p>
            </li>
            <li className="d-flex align-center justify-content-between">
              <p>SGST</p>
              <p className="fw-bold">9%</p>
            </li>
          </ul>
        </div>
        <div className="" id="price-listings">
          <ul>
            <li className="d-flex align-center justify-content-between">
              <h4 className="fw-bolder">Grand Total</h4>
              <h4 className="fw-bold">1000</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
