import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";

import { Dayjs } from "dayjs";
import InputWithLabel from "@/components/ui/InputWithLabel";
import CheckboxWithLabel from "@/components/ui/CheckboxWithLabel";
import ColorPicker from "@/components/ColorPicker";

type Props =
  | {
      day: Dayjs;
      event?: Event;
    }
  | {
      day?: never;
      event: Event;
    };

const EventFormDialog = ({ day, event }: Props) => {
  const title = day ? "Add new event" : "Edit event";
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>
          <p>{day?.format("	dddd, MMMM D, YYYY")}</p>

          <div className="mt-6 flex flex-col space-y-6">
            <InputWithLabel label="Name" />
            <CheckboxWithLabel label="All Day" />
            <div className="flex space-x-4">
              <InputWithLabel
                label="Start Time"
                type="time"
                className="w-1/2"
              />
              <InputWithLabel label="End Time" type="time" className="w-1/2" />
            </div>
            <ColorPicker />
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default EventFormDialog;
