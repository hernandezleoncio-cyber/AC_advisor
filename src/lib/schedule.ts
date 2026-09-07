export type CalendarDay = {
  iso: string;
  date: number;
  inMonth: boolean;
  bookable: boolean;
};

const WEEKDAY_SLOTS = ["09:30", "10:00", "11:30", "13:00", "14:00", "15:30"];

export function todayIso(timeZone = "America/New_York"): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function addDays(iso: string, amount: number): string {
  const next = fromIso(iso);
  next.setUTCDate(next.getUTCDate() + amount);
  return toIso(next);
}

export function startOfMonth(iso: string): string {
  return `${iso.slice(0, 7)}-01`;
}

export function addMonths(iso: string, amount: number): string {
  const [year, month] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1 + amount, 1));
  return toIso(date);
}

export function monthLabel(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(fromIso(startOfMonth(iso)));
}

export function weekdayIndex(iso: string): number {
  return fromIso(iso).getUTCDay();
}

export function longDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(fromIso(iso));
}

export function formatTime(time: string): string {
  const [hour, minute] = time.split(":").map(Number);
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${period}`;
}

export function slotsFor(iso: string): string[] {
  if (!isWeekday(iso)) return [];
  const seed = Number(iso.replaceAll("-", ""));
  if (seed % 5 === 0) return [];
  const offset = seed % WEEKDAY_SLOTS.length;
  const count = 2 + (seed % 3);
  return Array.from({ length: count }, (_, index) => {
    return WEEKDAY_SLOTS[(offset + index * 2) % WEEKDAY_SLOTS.length];
  }).sort();
}

export function firstBookableDay(fromIsoDate = todayIso()): string {
  let cursor = addDays(fromIsoDate, 1);
  for (let i = 0; i < 45; i += 1) {
    if (slotsFor(cursor).length > 0) return cursor;
    cursor = addDays(cursor, 1);
  }
  return addDays(fromIsoDate, 1);
}

export function monthGrid(monthIso: string, horizonStart: string, horizonEnd: string): CalendarDay[] {
  const first = startOfMonth(monthIso);
  const lead = weekdayIndex(first);
  const start = addDays(first, -lead);
  return Array.from({ length: 42 }, (_, index) => {
    const iso = addDays(start, index);
    return {
      iso,
      date: Number(iso.slice(8, 10)),
      inMonth: iso.startsWith(monthIso.slice(0, 7)),
      bookable: iso >= horizonStart && iso <= horizonEnd && slotsFor(iso).length > 0,
    };
  });
}

export function bookingHorizon(fromIsoDate = todayIso()) {
  const start = addDays(fromIsoDate, 1);
  const end = addDays(fromIsoDate, 28);
  return { start, end };
}

function isWeekday(iso: string) {
  const day = weekdayIndex(iso);
  return day !== 0 && day !== 6;
}

function fromIso(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function toIso(date: Date) {
  return date.toISOString().slice(0, 10);
}
