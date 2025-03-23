import React from 'react';

export interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`bg-gray-100 dark:bg-gray-800 py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Dream11. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 