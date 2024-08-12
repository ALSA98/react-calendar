import { useEffect, useState } from "react";
import CalendarHeader from "@/components/CalendarHeader";
import CalendarMonth from "@/components/CalendarMonth";
import dayjs from "dayjs";
import en from "dayjs/locale/en";
import EventProvider from "@/context/EventContext";
import type { Dayjs } from "dayjs";
import type { CalendarEvent, NewCalendarEvent } from "@/types";

type Props = {
  getIntervalEvents: (start: Date, end: Date) => Promise<CalendarEvent[]>;
  onAdd: (newEvent: NewCalendarEvent) => Promise<{ id: string }>;
};

const Calendar = ({ getIntervalEvents, onAdd }: Props) => {
  const today = dayjs();
  const [intervalStart, setIntervalStart] = useState<Date>();
  const [intervalEnd, setIntervalEnd] = useState<Date>();
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedDay, setSelectedDay] = useState(dayjs(today));

  dayjs.locale({ ...en, weekStart: 6 });

  const refreshIntervalEvents = async () => {
    if (!intervalStart || !intervalEnd) return;
    const intervalEvents = await getIntervalEvents(intervalStart, intervalEnd);
    setEvents(intervalEvents);
  };

  const onIntervalChange = async (start: Date, end: Date) => {
    setIntervalStart(start);
    setIntervalEnd(end);
  };

  useEffect(() => {
    refreshIntervalEvents();
  }, [intervalStart, intervalEnd]);

  return (
    <div className="flex h-full w-full flex-col bg-background">
      <CalendarHeader
        selectedDay={selectedDay}
        onNavigation={(newDay: Dayjs) => setSelectedDay(newDay)}
      />
      <EventProvider events={events} onAdd={onAdd}>
        <CalendarMonth
          selectedDay={selectedDay}
          today={today}
          onIntervalChange={onIntervalChange}
        />
      </EventProvider>
    </div>
  );
};

export default Calendar;
