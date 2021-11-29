/** Represents week type. */
export enum Week {
  Odd = 1,
  Even = 2,
}

export const DisplayWeeks: Record<Week, string> = {
  [Week.Odd]: 'Нечётная',
  [Week.Even]: 'Чётная',
};
