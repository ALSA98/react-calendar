import { ReactNode } from "react";
import CalendarHeaderNavigator from "./CalendarHeaderNavigator";

type Props = {
  selectedDate: Date;
  darkModeSwitch: ReactNode;
};

const CalendarHeader = ({ selectedDate, darkModeSwitch }: Props) => {
  return (
    <div className="flex h-14 items-center border-b px-6 py-2 lg:h-16">
      <CalendarHeaderNavigator selectedDate={selectedDate} />
      {darkModeSwitch}
    </div>
  );
};

export default CalendarHeader;
