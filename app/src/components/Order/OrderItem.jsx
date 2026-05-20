import CartSummary from "../Cart/CartSummary";
import styles from "./OrderItem.module.css";

export default function OrderItem({ id, events }) {
  return (
    <li key={id} className={styles.orderItem}>
      <div className={styles.header}>
        <span className={styles.label}>Order #{id}</span>
        <span className={styles.status}>Confirmed</span>
      </div>

      <div className={styles.body}>
        <CartSummary eventTickets={events} />
      </div>
    </li>
  );
}
