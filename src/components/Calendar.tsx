import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarMonth from "./CalendarMonth";
import SwitchWithLabel from "./ui/SwitchWithLabel";
import dayjs from "dayjs";
import en from "dayjs/locale/en";
import type { Dayjs } from "dayjs";

const Calendar = () => {
  const today = dayjs();
  const [selectedDay, setSelectedDay] = useState(dayjs(today));
  const [isDarkMode, setIsDarkMode] = useState(false);

  dayjs.locale({ ...en, weekStart: 6 });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`flex h-full w-full flex-col bg-background ${isDarkMode ? "dark" : ""}`}
    >
      <CalendarHeader
        selectedDay={selectedDay}
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
        onNavigation={(newDay: Dayjs) => setSelectedDay(newDay)}
      />
      <CalendarMonth selectedDay={selectedDay} today={today} />
    </div>
  );
};

export default Calendar;
