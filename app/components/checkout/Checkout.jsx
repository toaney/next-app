'use client'

import './Checkout.css'
import React, {useState, useEffect} from 'react'

const Checkout = ({ cart, updateCartQuantity }) => {
  const [subtotalValue, setSubtotalValue] = useState(0);

  useEffect(()=> {
    let subtotal = 0;

    subtotal = cart.reduce((acc, product) => {
      return acc + (product.price * product.quantity);
    }, 0)
                           

    console.log(cart)
    console.log(subtotal)

    setSubtotalValue(subtotal.toFixed(2))
    
  }, [cart])
  
  return (
    <div className="checkout">
      <h3>Checkout </h3>
      <div className="line-items">
        <input
          type="text"
          placeholder="Enter a Coupon code"
          className="coupon-code"
        />
        <div className="totals">
          <div className="subtotal checkout-line">
            <span className="subtotal-title">Subtotal</span>
            <span className="subtotal-value">${subtotalValue} </span>
          </div>
          <div className="tax checkout-line">
            <span className="tax-title">Tax</span>
            <span className="tax-value">${0} </span>
          </div>
          <div className="total checkout-line">
            <span className="total-title">Total</span>
            <span className="total-value">${0} </span>
          </div>
        </div>
      </div>
      <button> Check Out </button>
    </div>
  );
};

export default Checkout;