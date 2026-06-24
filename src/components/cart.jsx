import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

// Zadatak 1: Iskorišteno rešenje iz Assignmenta 01 kao početna osnova
// Komponenta Cart predstavlja korpu i prikazuje listu proizvoda i ukupan iznos

const Cart = () => {
  // Zadatak 2: useState Hook za smeštanje proizvoda u state
  // Početni niz proizvoda je smešten u state kako bi se omogućile promene
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Blazer",
      price: 95,
      color: "Beige",
      size: "S",
      quantity: 1,
      image: "blazer.png",
    },
    {
      id: 2,
      name: "Chunky Knit Sweater",
      price: 55,
      color: "Brown",
      size: "M",
      quantity: 1,
      image: "sweater.png",
    },
    {
      id: 3,
      name: "Mesh Sleeve Blouse",
      price: 32,
      color: "Yellow",
      size: "S",
      quantity: 1,
      image: "blouse.png",
    },
    {
      id: 4,
      name: "Retro Jeans",
      price: 70,
      color: "Black",
      size: "S",
      quantity: 1,
      image: "jeans.png",
    },
  ]);

  // Zadatak 8: Funkcija za dinamičko izračunavanje ukupnog iznosa
  // Total se računa na osnovu trenutnog stanja proizvoda u stateu
  const calculateTotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  // Zadatak 3: Funkcija za povećanje količine proizvoda
  // Koristi se map() za ažuriranje samo odgovarajućeg proizvoda
  const increaseQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  // Zadatak 4: Funkcija za smanjenje količine proizvoda
  // Koristi se map() za ažuriranje samo odgovarajućeg proizvoda
  // Provera da količina ne bude manja od 1
  const decreaseQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  // Zadatak 5: Funkcija za uklanjanje proizvoda iz korpe
  // Koristi se filter() za kreiranje novog niza bez uklonjenog proizvoda
  const removeProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  // Zadatak 9: useEffect Hook za praćenje promene stanja
  // Izvršava se svaki put kada se promeni niz proizvoda
  useEffect(() => {
    console.log("Cart updated:", products);
  }, [products]); // Zavisnost: products

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {/* Zadatak 10: Prikaz poruke kada je korpa prazna */}
        {products.length > 0 ? (
          products.map((product) => (
            // Zadatak 6: Funkcije se prosleđuju u CartItem preko propsa
            <CartItem
              key={product.id}
              product={product}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeProduct={removeProduct}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      {/* Zadatak 8: Prikaz ukupnog iznosa koji se dinamički ažurira */}
      <div className="cart-total">
        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default Cart;
