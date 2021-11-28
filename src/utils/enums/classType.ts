/** Represents class type(eg. Lect, lab or practice). */
export enum ClassType {
  Lab = 'лаб. работа',
  Practice = 'пр. занятие',
  Lecture = 'лекция',
}

export const ClassTypeColors = {
  [ClassType.Lab]: 'purple',
  [ClassType.Lecture]: 'blue',
  [ClassType.Practice]: 'green',
};
