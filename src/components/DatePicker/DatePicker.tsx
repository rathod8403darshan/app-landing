import React from 'react';
import { useTheme } from '@/context/ThemeContext';

export interface DatePickerProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  min?: string;
  max?: string;
  className?: string;
}

export function DatePicker({
  label,
  value,
  onChange,
  error,
  required = false,
  min,
  max,
  className = '',
}: DatePickerProps) {
  const { theme } = useTheme();

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className={`block text-sm font-bold mb-2 ${
          theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
        }`}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type="date"
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        max={max}
        className={`
          w-full px-4 py-2 rounded-lg border transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${theme === 'dark'
            ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600'
            : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
          }
          ${error ? 'border-red-500' : ''}
        `}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}