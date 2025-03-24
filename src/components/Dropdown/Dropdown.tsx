import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useTheme } from '@/context/ThemeContext';

export interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  label?: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

export function Dropdown({
  label,
  options,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  className = '',
}: DropdownProps) {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };

    if (selectRef.current) {
      selectRef.current.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      if (selectRef.current) {
        selectRef.current.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (optionsRef.current) {
      // Reset display property before animation starts
      if (isOpen) {
        optionsRef.current.style.display = 'block';
        gsap.fromTo(optionsRef.current,
          {
            opacity: 0,
            y: -10
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          }
        );
      } else {
        const tl = gsap.timeline();
        tl.to(optionsRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          ease: 'power2.in'
        }).set(optionsRef.current, {
          display: 'none'
        });
      }
    }
  }, [isOpen]);

  return (
    <div className={`mb-4 ${className} relative`}>
      {label && (
        <label className={`block text-sm font-bold mb-2 ${
          theme === 'dark' ? 'text-gray-200' : 'text-gray-400'
        }`}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        ref={selectRef}
        value={value}
        onChange={(e) => {
          onChange(e);
          setIsOpen(false);
        }}
        required={required}
        className={`
          w-full px-4 py-2 rounded-lg border transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${theme === 'dark' 
            ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
            : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
          }
          ${error ? 'border-red-500' : ''}
          appearance-none
        `}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div
        ref={optionsRef}
        className={`absolute w-full mt-1 rounded-lg shadow-lg z-50 hidden ${
          theme === 'dark' ? 'bg-gray-400' : 'bg-white'
        }`}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={`px-4 py-2 cursor-pointer ${
              theme === 'dark' 
                ? 'text-white hover:bg-gray-600' 
                : 'text-gray-900 hover:bg-gray-100'
            }`}
            onClick={() => {
              onChange({ target: { value: option.value } } as React.ChangeEvent<HTMLSelectElement>);
              setIsOpen(false);
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}