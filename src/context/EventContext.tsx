import { UnionOmit } from "@/lib/types";
import { createContext, ReactNode, useContext, useState } from "react";

export const EVENT_COLORS = ["red", "green", "blue"] as const;

export type Event = {
  id: string;
  name: string;
  color: (typeof EVENT_COLORS)[number];
  date: Date;
} & (
  | { isAllDay: true; startTime: string; endTime: string }
  | { isAllDay: false; startTime?: never; endTime?: never }
);

export type NewEvent = UnionOmit<Event, "id">;

export type EventContextValue = {
  events: Event[];
  addEvent: (newEvent: NewEvent) => void;
};

const EventContext = createContext<EventContextValue>({
  events: [],
  addEvent: () => null,
});

export const useEventContext = () => {
  const value = useContext(EventContext);
  if (!value) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return value;
};

const EventProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);

  const value: EventContextValue = {
    events,
    addEvent: (newEvent: NewEvent) => {
      setEvents((prevEvents) => [
        ...prevEvents,
        { ...newEvent, id: crypto.randomUUID() },
      ]);
    },
  };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};

export default EventProvider;
