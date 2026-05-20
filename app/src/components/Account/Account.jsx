import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useOrder } from "../../context/OrderContext";
import OrderItem from "../Order/OrderItem";
import styles from "./Account.module.css";

export default function Account() {
  const { user } = useAuth();
  const { getOrders } = useOrder();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const userOrders = await getOrders();
      setOrders(userOrders.filter((order) => order.user_id === user.id));
    }

    fetchOrders();
  }, []);

  return (
    <div className={styles.orderWrapper}>
      <h1 className={styles.title}>My order history</h1>

      {orders.length === 0 ? (
        <p className={styles.emptyOrderList}>
          You haven't placed any orders yet!
        </p>
      ) : (
        <ul className={styles.orderList}>
          {orders.map((order, index) => (
            <OrderItem
              key={order.id}
              id={order.id}
              events={order.events}
              index={index}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
