import { useState } from "react";
import EventCard from "../../components/EventCard/EventCard.jsx";
import FilterOption from "../../components/FilterOption/FilterOption.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import SearchBar from "../../components/Search/SearchBar.jsx";
import SearchSection from "../../components/Search/SearchSection.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import SortBar from "../../components/SortBar/SortBar.jsx";
import useEventFilters from "../../hooks/useEventFilters.jsx";
import useEvents from "../../hooks/useEvents.jsx";
import styles from "./EventList.module.css";

export default function EventList() {
  const { events, loading, error } = useEvents();
  const {
    displayedEvents,
    search,
    setSearch,
    priceFilters,
    handlePriceChange,
    cityFilters,
    handleCityChange,
    categoryFilters,
    handleCategoryChange,
    handleSortChange,
  } = useEventFilters(events);
  const eventsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastEvent = Math.min(
    currentPage * eventsPerPage,
    displayedEvents.length,
  );
  const indexOfFirstEvent = (currentPage - 1) * eventsPerPage;
  const currentEvents = displayedEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent,
  );

  function handleOnSearch(value = "") {
    setSearch(value);
    setCurrentPage(1);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/* Search */}
      <SearchSection>
        <SearchBar
          search={search}
          onSearch={(e) => handleOnSearch(e.target.value)}
          onClearSearch={() => handleOnSearch()}
        />
      </SearchSection>

      <div className={styles.wrapper}>
        {/* Filter */}
        <SideBar>
          <FilterOption
            filterTitle="Price"
            filterOptions={priceFilters}
            onChange={(e) => {
              handlePriceChange(e);
              setCurrentPage(1);
            }}
          />
          <FilterOption
            filterTitle="City"
            filterOptions={cityFilters}
            onChange={(e) => {
              handleCityChange(e);
              setCurrentPage(1);
            }}
          />
          <FilterOption
            filterTitle="Category"
            filterOptions={categoryFilters}
            onChange={(e) => {
              handleCategoryChange(e);
              setCurrentPage(1);
            }}
          />
        </SideBar>

        {/* Main content */}
        <div className={styles.main}>
          {/* Sort bar */}
          <SortBar
            onChange={(e) => {
              handleSortChange(e);
              setCurrentPage(1);
            }}
          />

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
            <ul className={styles.eventsGrid}>
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
