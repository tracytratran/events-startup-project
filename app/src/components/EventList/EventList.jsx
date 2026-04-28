import events from "../../data/events.js";
import EventCard from "../EventCard/EventCard.jsx";
import styles from "./EventList.module.css";

// TODO: add a "Buy ticket" button to each event card
// TODO: replace the mock data import with a fetch call to GET /events

export default function EventList() {
  return (
    <ul className={styles.list}>
      {events.length > 0 &&
        events.map((event) => <EventCard key={event.id} event={event} />)}
      {events.length === 0 && (
        <h2 className={styles.noEvent}>
          Stay tune! More events are on the way...
        </h2>
      )}
    </ul>
  );
}
