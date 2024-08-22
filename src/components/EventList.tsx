import List from "@/components/utils/List";
import type { CalendarEvent } from "@/types";
import EventListItem from "@/components/EventListItem";
import { memo } from "react";

type Props = {
  events: CalendarEvent[];
};

const EventList = ({ events }: Props) => {
  return (
    <List items={events}>
      {(event) => <EventListItem key={event.id} event={event} />}
    </List>
  );
};

export default memo(EventList, (prevProps, nextProps) => {
  const eventsAreEqual = nextProps.events.every(
    (nextEvent, index) =>
      nextEvent.updatedAt === prevProps.events[index]?.updatedAt,
  );
  return eventsAreEqual;
});
