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
  const [checkedPrice, setCheckedPrice] = useState([]);
  const [checkedCategory, setCheckedCategory] = useState([]);

  function handleSortChange(e) {
    setSelector(e.target.value);
  }

  function sortEvents(filteredEvents) {
    if (selector === "default") {
      return filteredEvents;
    }

    if (selector === "soonest") {
      return [...filteredEvents].sort((a, b) => a.date.localeCompare(b.date));
    }

    if (selector === "latest") {
      return [...filteredEvents].sort((a, b) => b.date.localeCompare(a.date));
    }

    if (selector === "lowest") {
      return [...filteredEvents].sort((a, b) => a.price - b.price);
    }

    if (selector === "highest") {
      return [...filteredEvents].sort((a, b) => b.price - a.price);
    }
  }

  function handleFilterChange(e, setCheckedFilter) {
    const { name, checked } = e.target;
    if (checked) {
      setCheckedFilter((previous) => [...previous, name]);
    } else
      setCheckedFilter((previous) => previous.filter((item) => item !== name));
  }

  function filterEvents() {
    return events.filter((event) => {
      let priceType;
      event.price === 0 ? (priceType = "Free") : (priceType = "Paid");
      const matchPrice =
        checkedPrice.length === 0 || checkedPrice.includes(priceType);
      const matchCategory =
        checkedCategory.length === 0 ||
        checkedCategory.includes(event.category);
      return matchPrice && matchCategory;
    });
  }

  return (
    <div className={styles.wrapper}>
      {/* Filter */}
      <SideBar>
        <FilterOption
          filterTitle="Price"
          filterOptions={priceFilters}
          onChange={(e) => handleFilterChange(e, setCheckedPrice)}
        />
        <FilterOption
          filterTitle="Category"
          filterOptions={categoryFilters}
          onChange={(e) => handleFilterChange(e, setCheckedCategory)}
        />
      </SideBar>

      {/* Main content */}
      <div className={styles.main}>
        {/* Sort bar */}
        <SortBar onChange={handleSortChange} />

        {/* Event list */}
        {events.length > 0 ? (
          <ul className={styles.list}>
            {sortEvents(filterEvents()).map((event) => (
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
