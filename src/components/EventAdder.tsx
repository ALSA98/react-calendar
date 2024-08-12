import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogTrigger } from "@/components/ui/Dialog";
import { cn } from "@/lib/utils";
import EventFormDialog from "@/components/EventFormDialog";
import { Dayjs } from "dayjs";
import { useState } from "react";

type Props = {
  day: Dayjs;
  className?: string;
};

const EventAdder = ({ day, className }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="smIcon" variant="ghost" className={cn(className)}>
          <PlusIcon className="size-5" />
        </Button>
      </DialogTrigger>
      <EventFormDialog day={day} onSubmitted={() => setOpen(false)} />
    </Dialog>
  );
};

export default EventAdder;
