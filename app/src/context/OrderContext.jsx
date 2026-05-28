import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import api from "../api.js";

const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const { user, token } = useAuth();

  async function createOrder(events) {
    const response = await fetch(api("orders"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ userId: user.id, events }),
    });

    if (!response.ok) {
      throw new Error("Failed to create order!");
    }

    const order = await response.json();
    return order;
  }

  async function getOrders() {
    const response = await fetch(api("orders"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const orders = await response.json();
    return orders;
  }

  return (
    <OrderContext.Provider
      value={{
        createOrder,
        getOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  return useContext(OrderContext);
}
