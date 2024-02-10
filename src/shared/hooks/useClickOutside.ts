import { RefObject, useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handleClose: () => void
) => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) handleClose();
    };

    document.addEventListener('click', onClick);

    return () => document.removeEventListener('click', onClick);
  }, [ref, handleClose]);
};
