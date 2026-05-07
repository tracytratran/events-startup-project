import events from "../../data/events.js";
import styles from "./EventDetail.module.css";

// TODO: display at least date, time, venue, city, and description for one event
// TODO: use useParams() to get the event id from the URL
// TODO: fetch the event from GET /events/:id instead of using mock data

export default function EventDetail() {
  const eventToDisplay = events[0];

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src="../public/images/example-image-event.jpeg"
        alt={eventToDisplay.name}
      />

      <h1 className={styles.eventTitle}>{eventToDisplay.name}</h1>

      <hr className={styles.divider} />

      <p className={styles.sectionTitle}>Date and Time</p>
      <div className={styles.dateTime}>
        <div className={styles.dateTimeInfo}>
          📆 <span>{eventToDisplay.date}</span>
        </div>
        <div className={styles.dateTimeInfo}>
          🕐 <span>{eventToDisplay.time}</span>
        </div>
      </div>

      <hr className={styles.divider} />

      <p className={styles.sectionTitle}>Location</p>
      <div className={styles.location}>
        📍
        <span>
          {eventToDisplay.venue}, {eventToDisplay.city}
        </span>
      </div>

      <hr className={styles.divider} />

      <p className={styles.sectionTitle}>Ticket Information</p>
      <div className={styles.ticketInfo}>
        🎟
        <span>
          <strong>{eventToDisplay.price} kr.</strong> / ticket
          <span className={styles.separator} aria-hidden="true">
            ·
          </span>
          {eventToDisplay.ticketsAvailable} ticket{" "}
          {eventToDisplay.ticketsAvailable > 1 && "s"} available
        </span>
      </div>

      <hr className={styles.divider} />

      <p className={styles.sectionTitle}>Event Description</p>
      <p className={styles.eventDescription}>{eventToDisplay.description}</p>

      <hr className={styles.divider} />

      <p className={styles.sectionTitle}>Tags</p>
      <div className={styles.tags}>
        <span className={styles.tag}>{eventToDisplay.category}</span>
      </div>
    </div>
  );
}
