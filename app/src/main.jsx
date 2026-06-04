import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Account from "./pages/Account/Account.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import EventDetail from "./pages/EventDetail/EventDetail.jsx";
import EventList from "./pages/EventList/EventList.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Layout from "./pages/Layout/Layout.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { OrderProvider } from "./context/OrderContext.jsx";
import { SnackbarProvider } from "./context/SnackbarContext.jsx";
import "./main.css";

const ProtectedRoutes = () => {
  const accessToken = localStorage.getItem("token");

  return accessToken ? <Outlet /> : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "events", element: <EventList /> },
      { path: "events/:id", element: <EventDetail /> },
      { path: "my-cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [{ path: "my-account", element: <Account /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SnackbarProvider>
        <CartProvider>
          <OrderProvider>
            <RouterProvider router={router} />
          </OrderProvider>
        </CartProvider>
      </SnackbarProvider>
    </AuthProvider>
  </React.StrictMode>,
);
