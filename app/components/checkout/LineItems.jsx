'use client';

import LineItem from './LineItem'

const LineItems = ({ cart, updateCartQuantity }) => {
  return (
    <div className="products">
      <h3>Your Cart </h3>
      <div className="product-list">
        {cart.map((product) => {
          return (
            <LineItem
              product={product}
              updateCartQuantity={updateCartQuantity}
              key={product.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LineItems;