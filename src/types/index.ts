import { UnionOmit } from "@/lib/types";

export const EVENT_COLORS = ["red", "green", "blue"] as const;

export type CalendarEvent = {
  id: string;
  name: string;
  color: (typeof EVENT_COLORS)[number];
  date: Date;
} & (
  | { isAllDay: false; startTime: string; endTime: string }
  | { isAllDay: true; startTime?: never; endTime?: never }
);

export type NewCalendarEvent = UnionOmit<CalendarEvent, "id">;
