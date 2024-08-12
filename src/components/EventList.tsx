import List from "@/components/utils/List";
import { CalendarEvent } from "@/types";
import EventListItem from "@/components/EventListItem";

type Props = {
  events: CalendarEvent[];
};

const EventList = ({ events }: Props) => {
  return (
    <List items={events}>
      {(event) => (
        <>
          <EventListItem key={event.id} event={event} />
        </>
      )}
    </List>
  );
};

export default EventList;
