import CalendarHeaderNavigator from "@/components/CalendarHeaderNavigator";
import type { Dayjs } from "dayjs";
import { memo } from "react";

type Props = {
  selectedDay: Dayjs;
  onNavigation: (newDay: Dayjs) => void;
};

const CalendarHeader = ({ selectedDay, onNavigation }: Props) => {
  return (
    <div className="flex h-14 items-center border-b px-6 py-2 lg:h-16">
      <CalendarHeaderNavigator
        selectedDay={selectedDay}
        onNavigation={onNavigation}
      />
    </div>
  );
};

export default memo(CalendarHeader, (prevProps, nextProps) =>
  prevProps.selectedDay.isSame(nextProps.selectedDay),
);
