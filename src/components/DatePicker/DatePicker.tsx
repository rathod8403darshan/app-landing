import React from 'react';

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
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
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
          w-full px-4 py-2 rounded-lg border
          focus:outline-none focus:ring-2 focus:ring-blue-500
          dark:bg-gray-700 dark:border-gray-600 dark:text-white
          ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
        `}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
} 