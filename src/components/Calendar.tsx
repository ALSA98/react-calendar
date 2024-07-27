import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarMonth from "./CalendarMonth";
import SwitchWithLabel from "./ui/SwitchWithLabel";
import dayjs from "dayjs";
import en from "dayjs/locale/en";
import type { Dayjs } from "dayjs";
import EventProvider from "@/context/EventContext";

const Calendar = () => {
  const today = dayjs();
  const [selectedDay, setSelectedDay] = useState(dayjs(today));
  const [isDarkMode, setIsDarkMode] = useState(false);

  dayjs.locale({ ...en, weekStart: 6 });

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
              onCheckedChange: (checked) => setIsDarkMode(checked),
            }}
            className="ms-auto"
          />
        }
        onNavigation={(newDay: Dayjs) => setSelectedDay(newDay)}
      />
      <EventProvider>
        <CalendarMonth selectedDay={selectedDay} today={today} />
      </EventProvider>
    </div>
  );
};

export default Calendar;
