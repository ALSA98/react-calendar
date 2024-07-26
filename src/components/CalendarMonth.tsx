import { getEachDayOfInterval } from "@/lib/dayjs";
import List from "./utils/List";
import type { Dayjs } from "dayjs";
import { useMemo, useRef } from "react";
import CalendarMonthDay from "./CalendarMonthDay";

type Props = {
  selectedDay: Dayjs;
};

const CalendarMonth = ({ selectedDay }: Props) => {
  const daysOfWeekRef = useRef<string[]>([]);

  const daysOfMonth = useMemo(() => {
    const firstWeekStart = selectedDay.startOf("month").startOf("week");
    const lastWeekEnd = selectedDay.endOf("month").endOf("week");

    const daysOfWeek = getEachDayOfInterval({
      start: firstWeekStart,
      end: firstWeekStart.add(6, "day"),
    });

    daysOfWeekRef.current = daysOfWeek.map((i) =>
      i.format("ddd").toUpperCase(),
    );

    return getEachDayOfInterval({
      start: firstWeekStart,
      end: lastWeekEnd,
    });
  }, [selectedDay]);

  return (
    <div className="flex w-full flex-grow flex-col text-foreground">
      <div className="grid grid-cols-7 divide-x">
        <List items={daysOfWeekRef.current}>
          {(item, key) => (
            <span key={key} className="mt-auto justify-end pt-1 text-center">
              <span className="text-xs font-bold opacity-50">{item}</span>
            </span>
          )}
        </List>
      </div>
      <div className="grid flex-grow grid-cols-7 divide-x">
        <List items={daysOfMonth}>
          {(day) => (
            <CalendarMonthDay
              day={day}
              isToday={day.isSame(selectedDay, "day")}
            />
          )}
        </List>
      </div>
    </div>
  );
};

export default CalendarMonth;
