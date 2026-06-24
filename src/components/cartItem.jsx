import React from "react";

// Komponenta CartItem prikazuje jedan proizvod u korpi
// Zadatak 7: Dugmad su povezana sa odgovarajućim funkcijama
const CartItem = ({
  product,
  increaseQuantity,  // Funkcija za povećanje količine
  decreaseQuantity,  // Funkcija za smanjenje količine
  removeProduct,     // Funkcija za uklanjanje proizvoda
}) => {
  return (
    <div className="cart-item">
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="cart-item-image"
      />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{product.name}</h3>
        <p className="cart-item-color">Color: {product.color}</p>
        <p className="cart-item-size">Size: {product.size}</p>
        <p className="cart-item-price">${product.price}</p>
        {/* Zadatak 7: Dugmad za kontrolu količine i uklanjanje */}
        <div className="cart-item-controls">
          {/* Dugme - poziva decreaseQuantity */}
          <button
            className="quantity-button"
            onClick={() => decreaseQuantity(product.id)}
          >
            -
          </button>
          {/* Prikaz trenutne količine */}
          <span className="quantity">{product.quantity}</span>
          {/* Dugme + poziva increaseQuantity */}
          <button
            className="quantity-button"
            onClick={() => increaseQuantity(product.id)}
          >
            +
          </button>
          {/* Dugme Remove poziva removeProduct */}
          <button
            className="remove-button"
            onClick={() => removeProduct(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
