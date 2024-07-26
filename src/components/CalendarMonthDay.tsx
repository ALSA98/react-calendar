import { cn } from "@/lib/utils";
import { Dayjs } from "dayjs";

type Props = {
  day: Dayjs;
  isToday: boolean;
};

const CalendarMonthDay = ({ day, isToday }: Props) => {
  const isStartOfMonth = day.date() === 1;
  return (
    <div
      key={day.unix()}
      className={cn(
        `mt-auto h-full justify-end border-b p-2 text-center text-sm font-medium
        opacity-70 hover:bg-accent`,
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
      <div className="flex flex-col gap-1 pt-1"></div>
    </div>
  );
};

export default CalendarMonthDay;
