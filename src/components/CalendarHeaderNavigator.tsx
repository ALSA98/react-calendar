import { Button } from "@/components/ui/Button";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";

const CalendarHeaderNavigator = () => {
  return (
    <div className="inline-flex h-full items-center gap-3">
      <Button variant="outline">Today</Button>
      <div>
        <Button variant="ghost" className="px-2">
          <ChevronLeftIcon />
        </Button>
        <Button variant="ghost" className="px-2">
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default CalendarHeaderNavigator;
