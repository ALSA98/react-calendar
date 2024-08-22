import { getEachDayOfInterval } from "@/lib/dayjs";
import List from "@/components/utils/List";
import type { Dayjs } from "dayjs";
import { memo, useCallback, useEffect, useMemo } from "react";
import CalendarMonthDay from "@/components/CalendarMonthDay";
import WeekNameRow from "@/components/WeekNameRow";
import { useEventContext } from "@/context/EventContext";
import dayjs from "dayjs";

type Props = {
  selectedDay: Dayjs;
  today: Dayjs;
  onIntervalChange: (start: Date, end: Date) => void;
};

const CalendarMonth = ({ selectedDay, today, onIntervalChange }: Props) => {
  const { events } = useEventContext();

  const firstWeekStart = useMemo(
    () => selectedDay.startOf("month").startOf("week"),
    [selectedDay],
  );

  const lastWeekEnd = useMemo(
    () => selectedDay.endOf("month").endOf("week"),
    [selectedDay],
  );

  const daysOfMonth = useMemo(
    () =>
      getEachDayOfInterval({
        start: firstWeekStart,
        end: lastWeekEnd,
      }),
    [selectedDay],
  );

  const getDayEvents = useCallback(
    (day: Dayjs) => events.filter((e) => day.isSame(dayjs(e.date))),
    [events],
  );

  useEffect(() => {
    onIntervalChange(firstWeekStart.toDate(), lastWeekEnd.toDate());
  }, [daysOfMonth]);

  return (
    <div className="flex w-full flex-grow flex-col text-foreground">
      <WeekNameRow firstDay={firstWeekStart} />
      <div className="grid flex-grow grid-cols-7 divide-x">
        <List items={daysOfMonth}>
          {(day) => (
            <CalendarMonthDay
              key={day.unix()}
              day={day}
              isToday={day.isSame(today, "day")}
              events={getDayEvents(day)}
            />
          )}
        </List>
      </div>
    </div>
  );
};

export default memo(CalendarMonth, (prevEvents, nextEvent) =>
  nextEvent.selectedDay.isSame(prevEvents.selectedDay),
);
