import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogTrigger } from "@/components/ui/Dialog";
import { cn } from "@/lib/utils";
import EventFormDialog from "@/components/EventFormDialog";
import { Dayjs } from "dayjs";

type Props = {
  day: Dayjs;
  className?: string;
};

const EventAdder = ({ day, className }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="smIcon" variant="ghost" className={cn(className)}>
          <PlusIcon className="size-5" />
        </Button>
      </DialogTrigger>
      <EventFormDialog day={day} />
    </Dialog>
  );
};

export default EventAdder;
