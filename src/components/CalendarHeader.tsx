import { ReactNode } from "react";
import CalendarHeaderNavigator from "./CalendarHeaderNavigator";

type Props = {
  darkModeSwitch: ReactNode;
};

const CalendarHeader = (props: Props) => {
  return (
    <div className="flex h-14 items-center border-b px-6 py-2 lg:h-16">
      <CalendarHeaderNavigator />
      {props.darkModeSwitch}
    </div>
  );
};

export default CalendarHeader;
