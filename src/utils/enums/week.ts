import { Week } from 'sibfu-timetable-api';

/** Display weeks in russian. */
export const DisplayWeeks: Record<Week, string> = {
  [Week.Odd]: 'Нечётная',
  [Week.Even]: 'Чётная',
};
