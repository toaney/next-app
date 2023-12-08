'use client';

import React, { useState } from 'react'

import LineItems from './LineItems'
import NavBar from './NavBar'
import Checkout from './Checkout'

import './App.css'

const initialCart = [
  {
    name: "Smart Thermometer",
    sku: "YST-V2",
    icon: "🌡️",
    price: 79.99,
    quantity: 0
  }
];

const PurchasePage = () => {
  const [cart, updateCart] = useState(initialCart);
  // console.log(cart)

  // TODO
  const updateCartQuantity = ({ quantity, name }) => {
    updateCart((cart) => {
      return (
        cart.map((product) => {
          if (product.name === name) {
            return {
              ...product,
              quantity: quantity
            }
          } else {
            return product
          }
        })
      )
      
    })
  };

  return (
    <div className="purchase-page">
      <NavBar />
      <LineItems cart={cart} updateCartQuantity={updateCartQuantity} />
      <Checkout cart={cart} />
    </div>
  );
};

export default PurchasePage