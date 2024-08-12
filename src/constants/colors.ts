import { EVENT_COLORS } from "@/types";

export const bgColorClasses: {
  [K in (typeof EVENT_COLORS)[number]]: string;
} = {
  red: "bg-red-500 hover:bg-red-400",
  green: "bg-green-500 hover:bg-green-400",
  blue: "bg-blue-500 hover:bg-blue-400",
};
