import { useCallback, useEffect, useRef } from 'react';

export const useClickOutside = (onClose: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current) {
        if (!ref.current.contains(event.target as Node)) {
          onClose();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return {
    ref,
  };
};