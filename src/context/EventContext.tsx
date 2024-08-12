import { CalendarEvent, NewCalendarEvent } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type EventContextValue = {
  events: CalendarEvent[];
  addEvent: (newEvent: NewCalendarEvent) => Promise<void>;
};

const EventContext = createContext<EventContextValue>({
  events: [],
  addEvent: () => Promise.resolve(),
});

export const useEventContext = () => {
  const value = useContext(EventContext);
  if (!value) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return value;
};

type ProviderProps = {
  events: CalendarEvent[];
  onAdd: (newEvent: NewCalendarEvent) => Promise<{ id: string }>;
  children: ReactNode;
};

const EventProvider = ({ events, children, onAdd }: ProviderProps) => {
  const [cachedEvents, setCachedEvents] = useState(() => events);
  const value: EventContextValue = {
    events: cachedEvents,
    addEvent: async (newEvent: NewCalendarEvent) => {
      const { id } = await onAdd(newEvent);
      setCachedEvents((prev) => [...prev, { ...newEvent, id }]);
    },
  };

  useEffect(() => {
    console.log("events prop effect inside context");
    setCachedEvents(events);
  }, [events]);

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};

export default EventProvider;
