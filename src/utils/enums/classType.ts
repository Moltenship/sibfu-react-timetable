import { ClassType } from 'sibfu-timetable-api';

/** Object with colors for each class type. */
export const ClassTypeColors: Record<ClassType, string> = {
  [ClassType.Lab]: 'purple',
  [ClassType.Lecture]: 'blue',
  [ClassType.Practice]: 'green',
};
