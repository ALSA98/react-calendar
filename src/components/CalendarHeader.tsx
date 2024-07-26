import { ReactNode } from "react";
import CalendarHeaderNavigator from "./CalendarHeaderNavigator";
import type { Dayjs } from "dayjs";

type Props = {
  selectedDay: Dayjs;
  darkModeSwitch: ReactNode;
};

const CalendarHeader = ({ selectedDay, darkModeSwitch }: Props) => {
  return (
    <div className="flex h-14 items-center border-b px-6 py-2 lg:h-16">
      <CalendarHeaderNavigator selectedDay={selectedDay} />
      {darkModeSwitch}
    </div>
  );
};

export default CalendarHeader;
