import { cn } from "@/lib/utils";
import { Dayjs } from "dayjs";
import EventAdder from "@/components/EventAdder";

type Props = {
  day: Dayjs;
  isToday: boolean;
};

const CalendarMonthDay = ({ day, isToday }: Props) => {
  const isStartOfMonth = day.date() === 1;
  return (
    <div
      className={cn(
        `group relative mt-auto h-full justify-end border-b p-2 text-center text-sm
        font-medium opacity-70 hover:z-10 hover:outline hover:outline-offset-[-1px]`,
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
        className="absolute end-0.5 top-0.5 hidden group-hover:flex"
      />
      <div className="flex flex-col gap-1 pt-1"></div>
    </div>
  );
};

export default CalendarMonthDay;
