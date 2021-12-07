import { useEffect, useRef } from 'react';

/**
 * Handles document keydown event.
 * @param key Key code.
 * @param cb Callback function.
 */
export const useKey = (key: string, cb: (event?: Event) => void): void => {
  const ref = useRef(cb);

  useEffect(() => {
    ref.current = cb;
  });

  useEffect(() => {
    /**
     * Document event handler.
     */
    const handler = (event: KeyboardEvent): void => {
      if (event.code === key) {
        ref.current(event);
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [key]);
};
