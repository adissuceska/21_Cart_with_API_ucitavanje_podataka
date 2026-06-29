import React from "react";
import Cart from "./components/cart"; // Zadatak 1: Uvoz komponente Cart

// Savet 5: Držanje niza proizvoda u Cart komponenti, a prikaz jednog proizvoda u CartItem
// Zadatak 1: Kreiranje glavne komponente App koja renderuje Cart
function App() {
  return (
    <div className="App">
      <Cart />
    </div>
  );
}

export default App;
