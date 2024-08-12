import { bgColorClasses } from "@/constants/colors";
import { cn } from "@/lib/utils";
import { CalendarEvent } from "@/types";

type Props = {
  event: CalendarEvent;
};

const EventListItem = ({ event }: Props) => {
  return (
    <div
      key={event.id}
      className={cn(
        "line-clamp-1 w-full rounded-sm px-1 text-white",
        bgColorClasses[event.color],
      )}
    >
      {event.name}
    </div>
  );
};

export default EventListItem;
