import CartSummary from "../Cart/CartSummary";
import styles from "./OrderItem.module.css";

export default function OrderItem({ id, events, index }) {
  return (
    <li key={id} className={styles.orderItem}>
      <div className={styles.header}>
        <span className={styles.label}>Order #{index + 1}</span>
        <span className={styles.status}>Confirmed</span>
      </div>

      <div className={styles.body}>
        <CartSummary eventTickets={events} />
      </div>
    </li>
  );
}
