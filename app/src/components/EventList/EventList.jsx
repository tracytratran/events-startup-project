import { useState } from "react";
import events from "../../data/events.js";
import EventCard from "../EventCard/EventCard.jsx";
import FilterOption from "../FilterOption/FilterOption.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import SortBar from "../SortBar/SortBar.jsx";
import styles from "./EventList.module.css";

// TODO: add a "Buy ticket" button to each event card
// TODO: replace the mock data import with a fetch call to GET /events

const priceFilters = ["Free", "Paid"];
const categoryFilters = events.map((event) => event.category);

export default function EventList() {
  const [selector, setSelector] = useState("default");

  function handleOnChange(e) {
    setSelector(e.target.value);
  }

  function sortEvents() {
    if (selector === "default") {
      return events;
    }

    if (selector === "soonest") {
      return [...events].sort((a, b) => a.date.localeCompare(b.date));
    }

    if (selector === "latest") {
      return [...events].sort((a, b) => b.date.localeCompare(a.date));
    }

    if (selector === "lowest") {
      return [...events].sort((a, b) => a.price - b.price);
    }

    if (selector === "highest") {
      return [...events].sort((a, b) => b.price - a.price);
    }
  }

  return (
    <div className={styles.wrapper}>
      {/* Filter */}
      <SideBar>
        <FilterOption filterTitle="Price" filterOptions={priceFilters} />
        <FilterOption filterTitle="Category" filterOptions={categoryFilters} />
      </SideBar>

      {/* Main content */}
      <div className={styles.main}>
        {/* Sort bar */}
        <SortBar onChange={handleOnChange} />

        {/* Event list */}
        {events.length > 0 ? (
          <ul className={styles.list}>
            {sortEvents().map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </ul>
        ) : (
          <h2 className={styles.noEvent}>
            Stay tune! More events are on the way...
          </h2>
        )}
      </div>
    </div>
  );
}
