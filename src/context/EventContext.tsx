import type { CalendarEvent, NewCalendarEvent } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type EventContextValue = {
  events: CalendarEvent[];
  createEvent: (newEvent: NewCalendarEvent) => Promise<void>;
  updateEvent: (id: string, newEvent: NewCalendarEvent) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
};

const EventContext = createContext<EventContextValue>({
  events: [],
  createEvent: () => Promise.resolve(),
  updateEvent: () => Promise.resolve(),
  deleteEvent: () => Promise.resolve(),
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
  onCreate: (newEvent: NewCalendarEvent) => Promise<{ id: string }>;
  onUpdate: (id: string, newEvent: NewCalendarEvent) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  children: ReactNode;
};

const EventProvider = ({
  events,
  children,
  onCreate,
  onUpdate,
  onDelete,
}: ProviderProps) => {
  const [cachedEvents, setCachedEvents] = useState(() => events);

  const value: EventContextValue = {
    events: cachedEvents,
    createEvent: async (newEvent: NewCalendarEvent) => {
      try {
        const { id } = await onCreate(newEvent);
        setCachedEvents((prev) => [...prev, { ...newEvent, id }]);
      } catch (_err) {
        console.error("Calendar: failed to create this event:", newEvent);
      }
    },
    updateEvent: async (id: string, newEvent: NewCalendarEvent) => {
      try {
        await onUpdate(id, newEvent);
        setCachedEvents((prev) => {
          const updatedEventIndex = prev.findIndex((i) => i.id === id);
          const updatedEvents = [...prev];
          updatedEvents[updatedEventIndex] = { id, ...newEvent };
          return updatedEvents;
        });
      } catch (_err) {
        console.error("Calendar: failed to update this event:", {
          id,
          ...newEvent,
        });
      }
    },
    deleteEvent: async (id: string) => {
      try {
        await onDelete(id);
        setCachedEvents((prev) => {
          const deletedEventIndex = prev.findIndex((i) => i.id === id);
          const updatedEvents = [...prev];
          updatedEvents.splice(deletedEventIndex, 1);
          return updatedEvents;
        });
      } catch (_err) {
        console.error("Calendar: failed to delete this event:", id);
      }
    },
  };

  useEffect(() => {
    setCachedEvents(events);
  }, [events]);

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};

export default EventProvider;
