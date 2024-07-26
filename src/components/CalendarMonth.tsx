import { getEachDayOfInterval } from "@/lib/dayjs";
import List from "./utils/List";
import dayjs from "dayjs";
import en from "dayjs/locale/en";
import { useMemo, useRef } from "react";
import CalendarMonthDay from "./CalendarMonthDay";

type Props = {
  selectedDate: Date;
};

const CalendarMonth = ({ selectedDate }: Props) => {
  dayjs.locale({ ...en, weekStart: 6 });

  const daysOfWeekRef = useRef<string[]>([]);

  const daysOfMonth = useMemo(() => {
    const firstWeekStart = dayjs(selectedDate).startOf("month").startOf("week");
    const lastWeekEnd = dayjs(selectedDate).endOf("month").endOf("week");

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
  }, [selectedDate]);

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
      <div className="grid flex-grow grid-cols-7 grid-rows-5 divide-x">
        <List items={daysOfMonth}>
          {(day) => (
            <CalendarMonthDay
              day={day}
              isToday={day.isSame(selectedDate, "day")}
            />
          )}
        </List>
      </div>
    </div>
  );
};

export default CalendarMonth;
