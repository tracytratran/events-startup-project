import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [eventItems, setEventItems] = useState([]);
  const cartCount = eventItems.length;

  function addItemToCart(name, price) {
    const existingItem = eventItems.find((item) => item.name === name);
    if (existingItem) {
      updateItemQuantity(name, existingItem.quantity + 1);
      return;
    }
    setEventItems((prev) => [...prev, { name, price, quantity: 1 }]);
  }

  function removeItemFromCart(name) {
    setEventItems((prev) => prev.filter((item) => item.name !== name));
  }

  function updateItemQuantity(name, quantity) {
    if (quantity <= 0) {
      removeItemFromCart(name);
      return;
    }

    setEventItems((prev) =>
      prev.map((item) => (item.name === name ? { ...item, quantity } : item)),
    );
  }

  return (
    <CartContext.Provider
      value={{
        eventItems,
        cartCount,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
