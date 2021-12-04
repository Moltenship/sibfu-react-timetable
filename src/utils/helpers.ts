/**
 * Delays function.
 * @param fn Function to debounce.
 * @param delay Time to delay execution of function.
 * @returns A debounced function.
 */
export function debounce<TArgs extends unknown[]>(fn: (this: void, ...args: TArgs) => unknown, delay: number): (...args: TArgs) => void {
  let timeoutID: number | null = null;
  return (...args: TArgs) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
