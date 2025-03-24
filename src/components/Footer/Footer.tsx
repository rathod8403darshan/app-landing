import React from 'react';
import { useTheme } from '@/context/ThemeContext';

export interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const { theme } = useTheme();
  
  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-600'} py-4 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Dream11. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}