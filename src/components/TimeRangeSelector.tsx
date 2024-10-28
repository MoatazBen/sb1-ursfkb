import React from 'react';

type TimeRange = '24h' | '7d' | '30d';

interface TimeRangeSelectorProps {
  selectedRange: TimeRange;
  onRangeChange: (range: TimeRange) => void;
}

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({ selectedRange, onRangeChange }) => {
  return (
    <div className="flex space-x-2 mb-6">
      {[
        { value: '24h', label: 'Last 24 Hours' },
        { value: '7d', label: 'Last 7 Days' },
        { value: '30d', label: 'Last 30 Days' },
      ].map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onRangeChange(value as TimeRange)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            selectedRange === value
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TimeRangeSelector;