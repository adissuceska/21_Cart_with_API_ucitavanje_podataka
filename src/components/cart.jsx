import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { fetchCartData } from "../api/apiClient";

// [Zadatak 2]: Iz komponente Cart uklonjen statički niz proizvoda
// [Zadatak 3]: Dodata stanja products, loading i error pomoću useState
const Cart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // [Zadatak 5]: useEffect Hook za slanje GET zahteva ka API-ju
  // [Savet 4]: Ne koristi fetch direktno u komponenti, već koristi apiClient
  useEffect(() => {
    const loadCartData = async () => {
      try {
        // [Zadatak 5]: GET zahtev ka API-ju: https://api.advanziaeducation.com/carts/1
        console.log("Učitavanje podataka o korpi...");
        const data = await fetchCartData(1);
        console.log("Podaci uspešno učitani:", data);

        // [Zadatak 6]: Nakon uspešnog odgovora, izvlaći proizvode iz response-a
        // [Zadatak 12]: Prikaz poruke ako je korpa prazna
        const productsData = data.products || [];
        if (productsData.length === 0) {
          console.log("Korpa je prazna.");
        }
        setProducts(productsData);
        setLoading(false);
      } catch (err) {
        // [Zadatak 7]: Postavljanje error state i prikazivanje poruke o grešci
        console.error("Greška pri učitavanju podataka:", err.message);
        setError(err.message);
        setLoading(false);
      }
    };

    loadCartData();
  }, []);

  // [Zadatak 11]: Funkcija za dinamičko izračunavanje ukupnog iznosa
  // Total se računa na osnovu trenutnog stanja proizvoda u state-u
  const calculateTotal = () => {
    const total = products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    console.log("Ukupan iznos korpe:", total.toFixed(2));
    return total;
  };

  const increaseQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decreaseQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  // [Zadatak 8]: Prikaz poruke dok se podaci učitavaju
  if (loading) {
    console.log("Loading...");
    return <div className="cart">Loading…</div>;
  }

  // [Zadatak 7]: Prikaz poruke u slučaju greške
  if (error) {
    console.error("Greška:", error);
    return <div className="cart">Something went wrong.</div>;
  }

  console.log("Trenutni proizvodi u korpi:", products);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {/* [Zadatak 12]: Prikaz poruke ako je korpa prazna */}
        {products.length > 0 ? (
          products.map((product) => (
            // [Zadatak 10]: Prikazivanje liste proizvoda koristeći CartItem komponentu
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
      {/* [Zadatak 11]: Prikaz ukupnog iznosa koji se dinamički ažurira */}
      <div className="cart-total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
