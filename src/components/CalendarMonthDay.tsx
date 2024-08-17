import { cn } from "@/lib/utils";
import { Dayjs } from "dayjs";
import EventAdder from "@/components/EventAdder";
import EventList from "@/components/EventList";
import type { CalendarEvent } from "@/types";
import { useMemo } from "react";

type Props = {
  day: Dayjs;
  isToday: boolean;
  events: CalendarEvent[];
};

const CalendarMonthDay = ({ day, isToday, events }: Props) => {
  const isStartOfMonth = day.date() === 1;

  const sortedEvents = useMemo(() => {
    const timeToNumber = (time: string) => parseFloat(time.replace(":", "."));

    return [...events].sort((a, b) => {
      if (a.isAllDay && b.isAllDay) {
        return 0;
      } else if (a.isAllDay) {
        return -1;
      } else if (b.isAllDay) {
        return 1;
      }
      return timeToNumber(a.startTime) - timeToNumber(b.startTime);
    });
  }, [events]);

  return (
    <div
      className={cn(
        `group relative mt-auto h-full justify-end border-b p-2 text-center text-sm
        font-medium outline-2 hover:z-10 hover:outline hover:outline-offset-0`,
      )}
    >
      <span
        className={cn(
          isToday &&
            "rounded-full bg-primary px-1.5 py-0.5 text-primary-foreground",
        )}
      >
        {isStartOfMonth && day.format("MMM")} {day.format("D")}
      </span>
      <EventAdder
        day={day}
        className="absolute end-0 top-0 hidden group-hover:flex"
      />
      <div className="flex flex-col gap-1 pt-1 text-start">
        <EventList events={sortedEvents} />
      </div>
    </div>
  );
};

export default CalendarMonthDay;
