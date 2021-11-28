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

type DisplayDay = Record<Day, string>;

/** Mapped days ready for displaying. */
export const DisplayDays: DisplayDay = {
  [Day.Sunday]: 'Воскресенье',
  [Day.Monday]: 'Понедельник',
  [Day.Tuesday]: 'Вторник',
  [Day.Wednesday]: 'Среда',
  [Day.Thursday]: 'Четверг',
  [Day.Friday]: 'Пятница',
  [Day.Saturday]: 'Суббота',
} as const;

/** Sorted days according to Russian weekends. */
export const SortedDays = [1, 2, 3, 4, 5, 6, 0] as const;
