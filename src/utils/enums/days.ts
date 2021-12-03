/** Represents day of weeks. */
export enum Day {
  Sunday = 0,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

/**  Mapped days ready for displaying in Russian. */
export const DisplayDays: Record<Day, string> = {
  [Day.Sunday]: 'Воскресенье',
  [Day.Monday]: 'Понедельник',
  [Day.Tuesday]: 'Вторник',
  [Day.Wednesday]: 'Среда',
  [Day.Thursday]: 'Четверг',
  [Day.Friday]: 'Пятница',
  [Day.Saturday]: 'Суббота',
} as const;

/** Sorted days according to Russian week days. */
export const SortedDays = [1, 2, 3, 4, 5, 6, 0] as const;
