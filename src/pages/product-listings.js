import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../Redux/Reducers/cart.slice'

export default function ProductsListings() {
  const {cart, items}  = useSelector((state) => state.cart);
  const dispatcher = useDispatch();
  
  return (
    <div className='container'>
        <div className="cart-count">
            {cart && cart.length > 0 ? cart.length : 0}
        </div>
        <div className="listing-area">
            {
                items && items.length > 0 ? items.map((d, i) => {
                    return <div key={i} className="product-card">
                <h3 className="title">{d.name}</h3>
                <p className='price'>{d.price}</p>
                <button className='add-to-cart-cta' onClick={() => dispatcher(addProduct({
                    productId: d.id,
                    quantity: 1,
                }))}>Add to cart</button>
            </div>;
            }) : <p>No Products to show</p>
            }
        </div>
    </div>
  )
}
