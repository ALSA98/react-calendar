import Calendar from "@/components/Calendar";
import { useState } from "react";
import type { CalendarEvent, NewCalendarEvent } from "@/types";

function App() {
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
      <Calendar getIntervalEvents={getIntervalEvents} onAdd={postEvent} />
    </div>
  );
}

export default App;
