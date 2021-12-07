import { useEffect, useRef } from 'react';

/**
 * Handles ctrl + custom key combination.
 * @param key Key code.
 * @param cb Callback function.
 */
export const useKeyCombination = (key: string, cb: (event?: Event) => void): void => {
  const ref = useRef(cb);

  useEffect(() => {
    ref.current = cb;
  });

  useEffect(() => {
    /**
     * Document event handler.
     */
    const handler = (event: KeyboardEvent): void => {
      if (event.ctrlKey && event.code === key) {
        event.preventDefault();
        ref.current(event);
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [key]);
};
