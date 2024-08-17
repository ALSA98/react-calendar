import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { CalendarEvent } from "@/types";
import { bgColorClasses } from "@/constants/colors";
import dayjs from "dayjs";
import { ButtonProps } from "@/components/ui/Button";

type Props = {
  event: CalendarEvent;
};

const EventListItemTimed = forwardRef<HTMLButtonElement, Props & ButtonProps>(
  ({ event, ...props }, ref) => {
    const time = !event.isAllDay
      ? dayjs(event.startTime, "HH:mm").format("ha")
      : null;

    return (
      <button
        ref={ref}
        className={cn(
          `line-clamp-1 w-full rounded-sm bg-background px-1 text-start text-foreground
          hover:bg-accent`,
        )}
        {...props}
      >
        <span
          className={cn(
            "me-2 inline-block size-2 rounded-full",
            bgColorClasses[event.color],
          )}
        ></span>
        <span className="me-2 inline-block text-foreground opacity-50">
          {time}
        </span>
        {event.name}
      </button>
    );
  },
);

export default EventListItemTimed;
