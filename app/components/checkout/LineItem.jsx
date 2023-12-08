'use client';

const LineItem = ({ product, updateCartQuantity }) => {
  const handleIncrement = () => {
    let updatedProduct = { ...product, quantity: product.quantity + 1};
    updateCartQuantity(updatedProduct);
  }

  const handleDecrement = () => {
    let updatedProduct = { ...product, quantity: product.quantity === 0 ? 0 : product.quantity - 1};
    updateCartQuantity(updatedProduct);
  }
  
  return (
    <div className="product">
      <div className="product-name">
        <div className="product-icon">{product.icon}</div>
        {product.name}
      </div>
      <div className="product-count">
        <button onClick={() => {handleDecrement()}}>-</button>
        <span>{product.quantity}</span>
        <button onClick={() => {handleIncrement()}}>+</button>
      </div>
    </div >
  );
};


export default LineItem;