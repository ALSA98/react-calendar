import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import { Switch } from "@/components/ui/Switch";
import { Label } from "@/components/ui/Label";
import CalendarMonth from "./CalendarMonth";

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
        darkModeSwitch={
          <div className="ml-auto flex items-center space-x-2">
            <Switch
              id="calendar-dark-mode"
              defaultChecked={isDarkMode}
              onCheckedChange={toggleDarkMode}
            />
            <Label htmlFor="calendar-dark-mode">Dark Mode</Label>
          </div>
        }
      />
      <CalendarMonth selectedDate={selectedDate} />
    </div>
  );
};

export default Calendar;
