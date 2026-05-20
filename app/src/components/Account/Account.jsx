import { useEffect, useState } from "react";
import { useOrder } from "../../context/OrderContext";
import OrderItem from "../Order/OrderItem";
import styles from "./Account.module.css";

export default function Account() {
  const { getOrders } = useOrder();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const userOrders = await getOrders();
      setOrders(userOrders);
    }

    fetchOrders();
  }, []);

  return (
    <div className={styles.orderWrapper}>
      <h1 className={styles.title}>My order history</h1>

      <ul className={styles.orderList}>
        {orders.map((order) => (
          <OrderItem key={order.id} id={order.id} events={order.events} />
        ))}
      </ul>
    </div>
  );
}
