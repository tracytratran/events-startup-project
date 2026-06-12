import { createContext, useContext } from "react";
import api from "../api.js";
import { NetworkError, UndefinedServerError } from "../error-system.js";
import { useAuth } from "./AuthContext";

const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const { user, token } = useAuth();

  async function createOrder(events) {
    let response;

    try {
      response = await fetch(api("orders"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ userId: user.id, events }),
      });
    } catch {
      throw new NetworkError();
    }

    if (!response.ok) {
      const message = await response.text().catch(() => "");
      throw new UndefinedServerError(message || undefined);
    }

    return response.json();
  }

  async function getOrders() {
    let response;

    try {
      response = await fetch(api("orders"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    } catch {
      throw new NetworkError();
    }

    if (!response.ok) {
      const message = await response.text().catch(() => "");
      throw new UndefinedServerError(message || undefined);
    }

    return response.json();
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
