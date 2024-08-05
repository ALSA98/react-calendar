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

type Props = {
  day: Dayjs;
  event?: Event;
};

const EventFormDialog = ({ day, event }: Props) => {
  const title = day ? "Add new event" : "Edit event";
  return (
    <DialogContent>
      {event && <EllipsisMenu className="absolute right-14 top-3" />}
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <p className="text-sm">{day?.format("	dddd, MMMM D, YYYY")}</p>
      </DialogHeader>
      <DialogDescription>
        <div className="mt-2 flex flex-col space-y-4">
          <InputWithLabel label="Name" />
          <CheckboxWithLabel label="All Day" />
          <div className="flex space-x-4">
            <InputWithLabel label="Start Time" type="time" className="w-1/2" />
            <InputWithLabel label="End Time" type="time" className="w-1/2" />
          </div>
          <ColorPicker />
        </div>
      </DialogDescription>
      <DialogFooter className="pt-2 sm:justify-start">
        <Button className="w-full">Save</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default EventFormDialog;
