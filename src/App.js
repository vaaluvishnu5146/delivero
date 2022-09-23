import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './pages/Counter';
import Counts from './Component/CounterComponent';
import ProductsListings from './pages/product-listings';

function App() {
  return (
    <div className="App">
      {/* <Counts />
      <Counter /> */}
      <ProductsListings />

    </div>
  );
}

export default App;
