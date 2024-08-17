import { useState } from "react";
import type { CalendarEvent } from "@/types";

import EventListItemFilled from "@/components/EventListItemFilled";
import EventListItemTimed from "@/components/EventListItemTimed";
import EventFormDialog from "@/components/EventFormDialog";

import { Dialog, DialogTrigger } from "@/components/ui/Dialog";
import dayjs from "dayjs";

type Props = {
  event: CalendarEvent;
};

const EventListItem = ({ event }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {event.isAllDay ? (
            <EventListItemFilled event={event} />
          ) : (
            <EventListItemTimed event={event} />
          )}
        </DialogTrigger>
        <EventFormDialog
          day={dayjs(event.date)}
          event={event}
          onSubmitted={() => setOpen(false)}
        />
      </Dialog>
    </>
  );
};

export default EventListItem;
