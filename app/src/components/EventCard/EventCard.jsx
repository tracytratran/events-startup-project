import { Link } from "react-router-dom";
import styles from "./EventCard.module.css";

export default function EventCard({ event }) {
  const dateStr = event.date;
  const formattedDate = new Date(dateStr)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .replace(",", "");

  const price = event.price === 0 ? "Free" : `${event.price} kr.`;

  const ticketsAvailable =
    event.ticketsAvailable === 0
      ? "Sold out"
      : `${event.ticketsAvailable} ticket${event.ticketsAvailable > 1 && "s"} left`;

  return (
    <Link to={`/events/${event.id}`} className={styles.link}>
      <li className={styles.card}>
        <div className={styles.imageWrapper}>
          {/* <div className={styles.image}></div> */}
          <img
            src={event.image}
            alt={`Photo of ${event.name}`}
            className={styles.image}
          />
          <span className={styles.category}>{event.category}</span>
        </div>

        <div className={styles.eventInfo}>
          <span className={styles.date}>{formattedDate}</span>

          <div>
            <h2 className={styles.title}>{event.name}</h2>
            <p className={styles.location}>
              {event.venue}, {event.city}
            </p>
            <p className={styles.ticketInfo}>
              <span>{price}</span>
              <span>{ticketsAvailable}</span>
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
}
