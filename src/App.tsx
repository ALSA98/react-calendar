import Calendar from "@/components/Calendar";
import { useEffect, useState } from "react";
import type { CalendarEvent, NewCalendarEvent } from "@/types";
import SwitchWithLabel from "./components/ui/SwitchWithLabel";

function App() {
  // === mock dark mode ======
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  // =========================
  // === mock API behavior ===
  const [events, setEvents] = useState<CalendarEvent[]>([
    { color: "red", isAllDay: true, name: "test", id: "123", date: new Date() },
  ]);
  const getIntervalEvents = (_start: Date, _end: Date) =>
    Promise.resolve(events);
  const postEvent = (newEvent: NewCalendarEvent) => {
    const id = crypto.randomUUID() as string;
    setEvents((prevEvents) => [...prevEvents, { ...newEvent, id }]);
    return Promise.resolve({ id });
  };
  // =========================

  return (
    <div className="h-screen w-screen">
      <div
        className="fixed end-2 top-2 h-10 w-36 rounded-md border bg-background p-2 lg:end-3
          lg:top-3"
      >
        <SwitchWithLabel
          label="Dark Mode"
          defaultChecked={isDarkMode}
          onCheckedChange={(checked) => setIsDarkMode(checked)}
          className="ms-auto"
        />
      </div>
      <Calendar getIntervalEvents={getIntervalEvents} onAdd={postEvent} />
    </div>
  );
}

export default App;
