import EventCard from "../EventCard/EventCard.jsx";
import FilterOption from "../FilterOption/FilterOption.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import SortBar from "../SortBar/SortBar.jsx";
import SearchSection from "../Search/SearchSection.jsx";
import SearchBar from "../Search/SearchBar.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import useEvents from "../../hooks/useEvents.jsx";
import useEventFilters from "../../hooks/useEventFilters.jsx";
import styles from "./EventList.module.css";
import { useState } from "react";

// TODO: add a "Buy ticket" button to each event card

export default function EventList() {
  const { events, loading, error } = useEvents();
  const {
    displayedEvents,
    search,
    setSearch,
    priceFilters,
    handlePriceChange,
    categoryFilters,
    handleCategoryChange,
    handleSortChange,
  } = useEventFilters(events);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(4);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = displayedEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent,
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/* Search */}
      <SearchSection>
        <SearchBar
          search={search}
          onSearch={(e) => setSearch(e.target.value)}
          onClearSearch={() => setSearch("")}
        />
      </SearchSection>

      <div className={styles.wrapper}>
        {/* Filter */}
        <SideBar>
          <FilterOption
            filterTitle="Price"
            filterOptions={priceFilters}
            onChange={handlePriceChange}
          />
          <FilterOption
            filterTitle="Category"
            filterOptions={categoryFilters}
            onChange={handleCategoryChange}
          />
        </SideBar>

        {/* Main content */}
        <div className={styles.main}>
          {/* Sort bar */}
          <SortBar onChange={handleSortChange} />

          {/* Event list */}
          {/* When there are currently no events */}
          {events.length === 0 && (
            <h2 className={styles.noEvent}>
              Stay tuned! More events are on the way...
            </h2>
          )}

          {/* When no event(s) matched after filtering and/or sorting */}
          {events.length > 0 && currentEvents.length === 0 && (
            <h2 className={styles.noEvent}>No events matched!</h2>
          )}

          {currentEvents.length > 0 && (
            <ul className={styles.list}>
              {currentEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </ul>
          )}
        </div>
      </div>

      <Pagination
        eventsPerPage={eventsPerPage}
        totalEvents={displayedEvents.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
