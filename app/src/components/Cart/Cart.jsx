import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

export default function Cart() {
  const { eventTickets, ticketsCount, removeItemFromCart, updateItemQuantity } =
    useCart();

  const total = eventTickets.reduce(
    (sum, ticket) => sum + ticket.price * ticket.quantity,
    0,
  );

  if (ticketsCount === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className={styles.emptyIcon}>🛒</div>
        <p className={styles.emptyTitle}>Your cart is empty</p>
        <p className={styles.emptySubtitle}>Add some events to get started</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My cart</h1>
        <span className={styles.count}>
          {ticketsCount} {ticketsCount > 1 ? "tickets" : "ticket"}
        </span>
      </div>

      <ul className={styles.list}>
        {eventTickets.map((ticket) => (
          <CartItem
            key={ticket.name}
            name={ticket.name}
            price={ticket.price}
            quantity={ticket.quantity}
          />
        ))}
      </ul>

      <CartSummary />

      <button className={styles.checkoutBtn}>Proceed to checkout</button>
    </div>
  );
}
