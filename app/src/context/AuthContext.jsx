import { createContext, useContext, useState } from "react";
import api from "../api.js";
import {
  InvalidCredentials,
  NetworkError,
  UndefinedServerError,
} from "../error-system.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  async function login(email, password) {
    let response;

    try {
      response = await fetch(api("login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
    } catch {
      throw new NetworkError();
    }

    if (!response.ok) {
      const message = await response.text().catch(() => "");

      if (message.includes("Cannot find user")) {
        throw new InvalidCredentials(
          "No account found with this email. Please register first!",
        );
      }
      if (message.includes("Incorrect password")) {
        throw new InvalidCredentials("Incorrect email or password.");
      }

      throw new UndefinedServerError(message || undefined);
    }

    const { accessToken, user } = await response.json();
    persist(accessToken, user);
  }

  async function register(email, password) {
    let response;

    try {
      response = await fetch(api("register"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
    } catch {
      throw new NetworkError();
    }

    if (!response.ok) {
      const message = await response.text().catch(() => "");

      if (message.includes("Email already exists")) {
        throw new InvalidCredentials(
          "This account already exists. Please log in instead.",
        );
      }

      throw new UndefinedServerError(message || undefined);
    }

    const { accessToken, user } = await response.json();
    persist(accessToken, user);
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(undefined);
    setUser(undefined);
  }

  function persist(accessToken, user) {
    localStorage.setItem("token", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
    setToken(accessToken);
    setUser(user);
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Usage: const { user, token, login, register, logout } = useAuth();
export function useAuth() {
  return useContext(AuthContext);
}
