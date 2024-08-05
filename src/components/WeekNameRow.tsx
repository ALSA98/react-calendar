import { useEffect, useRef } from "react";
import { getEachDayOfInterval } from "@/lib/dayjs";
import List from "@/components/utils/List";
import type { Dayjs } from "dayjs";

type Props = {
  firstDay: Dayjs;
};

const WeekNameRow = ({ firstDay }: Props) => {
  const daysOfWeekRef = useRef<string[]>([]);

  useEffect(() => {
    const daysOfWeek = getEachDayOfInterval({
      start: firstDay,
      end: firstDay.add(6, "day"),
    });

    daysOfWeekRef.current = daysOfWeek.map((i) =>
      i.format("ddd").toUpperCase(),
    );
  }, []);

  return (
    <div className="grid grid-cols-7 divide-x">
      <List items={daysOfWeekRef.current}>
        {(item, key) => (
          <span key={key} className="mt-auto justify-end pt-1 text-center">
            <span className="text-xs font-bold opacity-50">{item}</span>
          </span>
        )}
      </List>
    </div>
  );
};

export default WeekNameRow;
