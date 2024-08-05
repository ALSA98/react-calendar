import { getEachDayOfInterval } from "@/lib/dayjs";
import List from "@/components/utils/List";
import type { Dayjs } from "dayjs";
import { useMemo } from "react";
import CalendarMonthDay from "@/components/CalendarMonthDay";
import WeekNameRow from "@/components/WeekNameRow";

type Props = {
  selectedDay: Dayjs;
  today: Dayjs;
};

const CalendarMonth = ({ selectedDay, today }: Props) => {
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
            />
          )}
        </List>
      </div>
    </div>
  );
};

export default CalendarMonth;
