import { ReactNode } from "react";
import CalendarHeaderNavigator from "./CalendarHeaderNavigator";
import type { Dayjs } from "dayjs";

type Props = {
  selectedDay: Dayjs;
  darkModeSwitch: ReactNode;
  onNavigation: (newDay: Dayjs) => void;
};

const CalendarHeader = ({
  selectedDay,
  darkModeSwitch,
  onNavigation,
}: Props) => {
  return (
    <div className="flex h-14 items-center border-b px-6 py-2 lg:h-16">
      <CalendarHeaderNavigator
        selectedDay={selectedDay}
        onNavigation={onNavigation}
      />
      {darkModeSwitch}
    </div>
  );
};

export default CalendarHeader;
