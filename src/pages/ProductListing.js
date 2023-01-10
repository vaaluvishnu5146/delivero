import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import ProductCard from "../Component/Card";
import ImageSlider from "../Component/imageSlider";
import { useSelector, useDispatch } from "react-redux";
import { saveAllProducts } from "../Redux/Reducers/products.slice";
import { addItemToCart } from "../Redux/Reducers/cart.slice";

export const pizzas = [];

export default function ProductListing() {
  const { products = [] } = useSelector((state) => state.product);
  const dispatcher = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5000/api/products/")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const { data = [], message = "" } = result;
        if (data.length > 0) {
          console.log(data);
          dispatcher(saveAllProducts(data));
        }
      })
      .catch((e) => console.log(e));
    return () => {};
  }, []);

  const handleAddToCart = (data) => {
    console.log("ADDING", data);
    const pizza = {
      ...data,
      quantity: 1,
    };
    if (pizza) {
      dispatcher(addItemToCart(pizza));
    }
  };

  return (
    <div className="">
      <ImageSlider />
      <div className="h-40"></div>
      <div className="app_container" id="product-listing container">
        <Container>
          <Row>
            {products &&
              products.map((piz, i) => (
                <Col key={i} className="col-lg-3">
                  <ProductCard data={piz} handleCart={handleAddToCart} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
