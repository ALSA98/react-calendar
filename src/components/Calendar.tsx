import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarMonth from "./CalendarMonth";
import SwitchWithLabel from "./ui/SwitchWithLabel";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`flex h-full w-full flex-col bg-background ${isDarkMode ? "dark" : ""}`}
    >
      <CalendarHeader
        selectedDate={selectedDate}
        darkModeSwitch={
          <SwitchWithLabel
            label="Dark Mode"
            switchProps={{
              defaultChecked: isDarkMode,
              onCheckedChange: toggleDarkMode,
            }}
            className="ms-auto"
          />
        }
      />
      <CalendarMonth selectedDate={selectedDate} />
    </div>
  );
};

export default Calendar;
