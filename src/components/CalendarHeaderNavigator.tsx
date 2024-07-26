import { Button } from "@/components/ui/Button";
import dayjs from "dayjs";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";

type Props = {
  selectedDate: Date;
};

const CalendarHeaderNavigator = ({ selectedDate }: Props) => {
  return (
    <div className="inline-flex h-full items-center gap-3">
      <Button variant="outline">Today</Button>
      <div>
        <Button variant="ghost" className="px-2">
          <ChevronLeftIcon className="size-5" />
        </Button>
        <Button variant="ghost" className="px-2">
          <ChevronRightIcon className="size-5" />
        </Button>
      </div>
      <span className="pb-0.5 text-2xl font-semibold text-foreground">
        {dayjs(selectedDate).format("MMMM YYYY")}
      </span>
    </div>
  );
};

export default CalendarHeaderNavigator;
