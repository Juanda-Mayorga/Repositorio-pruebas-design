import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-[4px] bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <h3 className="font-sans font-medium text-[18px] leading-[24px] text-black">
          {title}
        </h3>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4">
          {children}
        </div>
      </div>
    </div>
  );
};