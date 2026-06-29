import React from "react";

// [Savet 5]: Držanje niza proizvoda u Cart komponenti, a prikaz jednog proizvoda u CartItem
const CartItem = ({
  product,
  increaseQuantity,  // Funkcija za povećanje količine
  decreaseQuantity,  // Funkcija za smanjenje količine
  removeProduct,     // Funkcija za uklanjanje proizvoda
}) => {
  console.log("Prikazivanje CartItem za proizvod:", product.name);

  return (
    <div className="cart-item">
      {/* [Zadatak 11]: Prikaz različitih slika za proizvode na osnovu ID-ja */}
      {/* [Napomena]: Koristi slike iz foldera images, imenovane po ID-ju proizvoda */}
      <img
        src={`/images/${product.id}.png`}
        alt={product.name}
        className="cart-item-image"
      />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{product.name}</h3>
        <p className="cart-item-price">${product.price}</p>
        {/* [Zadatak 7]: Dugmad za kontrolu količine i uklanjanje */}
        <div className="cart-item-controls">
          {/* Dugme - poziva decreaseQuantity */}
          <button
            className="quantity-button"
            onClick={() => {
              console.log("Kliknuto - za proizvod ID:", product.id);
              decreaseQuantity(product.id);
            }}
          >
            -
          </button>
          {/* Prikaz trenutne količine */}
          <span className="quantity">{product.quantity}</span>
          {/* Dugme + poziva increaseQuantity */}
          <button
            className="quantity-button"
            onClick={() => {
              console.log("Kliknuto + za proizvod ID:", product.id);
              increaseQuantity(product.id);
            }}
          >
            +
          </button>
          {/* Dugme Remove poziva removeProduct */}
          <button
            className="remove-button"
            onClick={() => {
              console.log("Kliknuto Remove za proizvod ID:", product.id);
              removeProduct(product.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
