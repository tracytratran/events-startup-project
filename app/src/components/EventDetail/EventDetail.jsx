import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import useEventById from "../../hooks/useEventById.jsx";
import styles from "./EventDetail.module.css";

export default function EventDetail() {
  const { id } = useParams();
  const { event: eventToDisplay, loading, error } = useEventById(id);
  const { addItemToCart } = useCart();
  const [isShowed, setIsShowed] = useState(false);

  if (!eventToDisplay) return null;

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="../public/images/mock-event-img.jpg"
        alt={eventToDisplay.name}
      />

      <div className={styles.header}>
        <h1 className={styles.eventTitle}>{eventToDisplay.name}</h1>
        <button
          onClick={() =>
            addItemToCart(eventToDisplay.name, eventToDisplay.price)
          }
          className={styles.buyBtn}
        >
          Buy Ticket
        </button>
      </div>

      <hr className={styles.divider} />

      <section>
        <p className={styles.sectionTitle}>Date and Time</p>
        <div className={styles.dateTime}>
          <div className={styles.dateTimeInfo}>
            📆 <span>{eventToDisplay.date}</span>
          </div>
          <div className={styles.dateTimeInfo}>
            🕐 <span>{eventToDisplay.time}</span>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      <section>
        <p className={styles.sectionTitle}>Location</p>
        <div className={styles.location}>
          📍
          <span>
            {eventToDisplay.venue}, {eventToDisplay.city}
          </span>
        </div>
      </section>

      <button
        className={`${styles.toggleBtn} ${isShowed ? styles.hidden : ""}`}
        onClick={() => setIsShowed(!isShowed)}
      >
        Show more
      </button>

      {isShowed && (
        <>
          <hr className={styles.divider} />

          <section>
            <p className={styles.sectionTitle}>Ticket Information</p>
            <div className={styles.ticketInfo}>
              🎟
              <span>
                <strong>
                  {eventToDisplay.price === 0
                    ? "Free"
                    : `${eventToDisplay.price}kr.`}
                </strong>{" "}
                / ticket &nbsp;·&nbsp;{" "}
                {eventToDisplay.ticketsAvailable === 0
                  ? "Sold out"
                  : `${eventToDisplay.ticketsAvailable} ticket${eventToDisplay.ticketsAvailable > 1 ? "s" : ""} left`}
              </span>
            </div>
          </section>

          <hr className={styles.divider} />

          <section>
            <p className={styles.sectionTitle}>Event Description</p>
            <p className={styles.eventDescription}>
              {eventToDisplay.description}
            </p>
          </section>

          <hr className={styles.divider} />

          <section>
            <p className={styles.sectionTitle}>Tags</p>
            <div className={styles.tags}>
              <span className={styles.tag}>{eventToDisplay.category}</span>
            </div>
          </section>
        </>
      )}

      <button
        className={`${styles.toggleBtn} ${isShowed ? "" : styles.hidden}`}
        onClick={() => setIsShowed(!isShowed)}
      >
        Show less
      </button>
    </div>
  );
}
