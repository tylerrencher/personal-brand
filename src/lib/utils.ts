import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  const start = `${startMonth} ${startYear}`;

  let end = "";
  if (endDate) {
    if (typeof endDate === "string") {
      end = endDate;
    } else {
      const endMonth = endDate.toLocaleString("default", { month: "short" });
      const endYear = endDate.getFullYear().toString();
      end = `${endMonth} ${endYear}`;
    }
  }

  return end ? `${start} - ${end}` : start;
}