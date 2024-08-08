import { Button } from "@/components/ui/Button";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";
import IconButton from "@/components/ui/IconButton";

type Props = {
  selectedDay: Dayjs;
  onNavigation: (newDay: Dayjs) => void;
};

const CalendarHeaderNavigator = ({ selectedDay, onNavigation }: Props) => {
  const handleTodayClick = () => {
    onNavigation(dayjs());
  };

  const handleChevronLeftClick = () => {
    onNavigation(selectedDay.subtract(1, "month"));
  };

  const handleChevronRightClick = () => {
    onNavigation(selectedDay.add(1, "month"));
  };

  return (
    <div className="inline-flex h-full items-center gap-3">
      <Button variant="outline" onClick={handleTodayClick}>
        Today
      </Button>
      <div>
        <IconButton srText="Previous" onClick={handleChevronLeftClick}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton srText="Next" onClick={handleChevronRightClick}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <span className="pb-0.5 text-2xl font-semibold text-foreground">
        {selectedDay.format("MMMM YYYY")}
      </span>
    </div>
  );
};

export default CalendarHeaderNavigator;
