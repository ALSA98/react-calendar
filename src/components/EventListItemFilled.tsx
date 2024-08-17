import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { CalendarEvent } from "@/types";
import { bgColorClasses } from "@/constants/colors";
import { ButtonProps } from "@/components/ui/Button";

type Props = {
  event: CalendarEvent;
};

const EventListItemFilled = forwardRef<HTMLButtonElement, Props & ButtonProps>(
  ({ event, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "line-clamp-1 w-full rounded-sm px-1 text-start text-white",
          bgColorClasses[event.color],
        )}
        {...props}
      >
        {event.name}
      </button>
    );
  },
);

export default EventListItemFilled;
