import type { Dayjs } from "dayjs";

export function getEachDayOfInterval(interval: { start: Dayjs; end: Dayjs }) {
  let date = interval.start;
  const days: Dayjs[] = [];
  while (date.isBefore(interval.end) || date.isSame(interval.end)) {
    days.push(date);
    date = date.add(1, "day");
  }
  return days;
}
