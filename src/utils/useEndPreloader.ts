import { useEffect } from 'react';

export const useEndPreloader = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const preloader = document.getElementById('preloader');
      preloader?.remove();
      document.body.style.overflow = 'initial';
    }
  }, []);
};