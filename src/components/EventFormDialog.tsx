import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/Dialog";

import { Dayjs } from "dayjs";
import InputWithLabel from "@/components/ui/InputWithLabel";
import CheckboxWithLabel from "@/components/ui/CheckboxWithLabel";
import { Button } from "@/components/ui/Button";
import ColorPicker from "@/components/ColorPicker";
import EllipsisMenu from "@/components/ui/EllipsisMenu";
import {
  EVENT_COLORS,
  type CalendarEvent,
  type NewCalendarEvent,
} from "@/types";
import { FormEvent, useRef, useState } from "react";
import { useEventContext } from "@/context/EventContext";
import { Trash2Icon } from "lucide-react";

type Props = {
  day: Dayjs;
  event?: CalendarEvent;
  onSubmitted: () => void;
};

const EventFormDialog = ({ day, event, onSubmitted }: Props) => {
  const title = !event ? "Add new event" : "Edit event";

  const nameRef = useRef<HTMLInputElement>(null);
  const [selectedColor, setSelectedColor] = useState(
    event?.color || EVENT_COLORS[0],
  );
  const [isAllDayChecked, setIsAllDayChecked] = useState(
    event?.isAllDay || false,
  );
  const [startTime, setStartTime] = useState(event?.startTime || "");
  const endTimeRef = useRef<HTMLInputElement>(null);

  const { createEvent, updateEvent, deleteEvent } = useEventContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const endTime = nameRef.current?.value;

    if (!name) return;

    const commonFields = {
      name,
      date: event?.date || day.toDate(),
      color: selectedColor,
    };

    let newEvent: NewCalendarEvent;

    if (isAllDayChecked) {
      newEvent = {
        ...commonFields,
        isAllDay: true,
      };
    } else {
      if (!startTime || !endTime) return;
      newEvent = {
        ...commonFields,
        isAllDay: false,
        startTime,
        endTime,
      };
    }

    if (event) {
      updateEvent(event.id, newEvent);
    } else {
      createEvent(newEvent);
    }
    onSubmitted();
  };

  const handleDelete = () => {
    if (!event) return;
    setTimeout(() => {
      // wait for menu to be close first
      deleteEvent(event.id);
      onSubmitted();
    }, 200);
  };

  return (
    <DialogContent>
      {event && (
        <EllipsisMenu
          className="absolute right-14 top-3"
          items={[
            {
              prepend: <Trash2Icon className="me-2 size-4" />,
              label: "Delete",
              onClick: handleDelete,
            },
          ]}
        />
      )}
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <span className="text-sm">{day?.format("dddd, MMMM D, YYYY")}</span>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <DialogDescription>
          <span className="mt-2 flex flex-col space-y-5">
            <InputWithLabel
              ref={nameRef}
              label="Name"
              required
              defaultValue={event?.name || undefined}
            />
            <CheckboxWithLabel
              label="All Day"
              checked={isAllDayChecked}
              onClick={() => setIsAllDayChecked((prev) => !prev)}
            />
            <span className="flex space-x-4">
              <InputWithLabel
                label="Start Time"
                type="time"
                className="w-1/2"
                value={startTime}
                required={!isAllDayChecked}
                disabled={isAllDayChecked}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <InputWithLabel
                ref={endTimeRef}
                label="End Time"
                type="time"
                className="w-1/2"
                defaultValue={event?.endTime || undefined}
                min={startTime}
                required={!isAllDayChecked}
                disabled={isAllDayChecked}
              />
            </span>
            <ColorPicker
              selected={selectedColor}
              onChange={(newSelected) => setSelectedColor(newSelected)}
            />
          </span>
        </DialogDescription>
        <DialogFooter className="mt-5 pt-2 sm:justify-start">
          <Button className="w-full" type="submit">
            Save
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default EventFormDialog;
