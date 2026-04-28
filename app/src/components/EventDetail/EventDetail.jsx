import { useState } from "react";
import events from "../../data/events.js";
import styles from "./EventDetail.module.css";

// TODO: display at least date, time, venue, city, and description for one event
// TODO: use useParams() to get the event id from the URL
// TODO: fetch the event from GET /events/:id instead of using mock data

export default function EventDetail() {
  const [isShowed, setIsShowed] = useState(false);
  const eventToDisplay = events[0];

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src="../public/images/mock-event-img.jpg"
        alt={eventToDisplay.name}
      />

      <h1 className={styles.eventTitle}>{eventToDisplay.name}</h1>

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
