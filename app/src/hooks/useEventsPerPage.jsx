import { useEffect, useState } from "react";

export default function useEventsPerPage() {
  const [eventsPerPage, setEventsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setEventsPerPage(9);
      else if (window.innerWidth >= 1024) setEventsPerPage(6);
      else if (window.innerWidth >= 768) setEventsPerPage(4);
      else setEventsPerPage(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return eventsPerPage;
}
