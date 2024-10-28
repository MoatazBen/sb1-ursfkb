import React, { useState } from 'react';
import TimeRangeSelector from '../components/TimeRangeSelector';
import ChartCard from '../components/ChartCard';
import { Thermometer } from 'lucide-react';

const generateTempData = (points: number) => {
  const data = [];
  const now = new Date();
  for (let i = points; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 3600000).toISOString();
    data.push({
      timestamp,
      value: 20 + Math.random() * 10,
    });
  }
  return data;
};

const TemperatureChart = () => {
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('24h');
  const tempData = generateTempData(24);
  const currentTemp = tempData[tempData.length - 1].value.toFixed(1);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-8">
        <Thermometer className="w-8 h-8 text-blue-600 mr-3" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Temperature Monitoring</h1>
          <p className="text-gray-600">Current temperature: {currentTemp}°C</p>
        </div>
      </div>

      <TimeRangeSelector selectedRange={timeRange} onRangeChange={setTimeRange} />

      <ChartCard
        title="Temperature History"
        data={tempData}
        color="#3B82F6"
        unit="°C"
      />
    </div>
  );
};

export default TemperatureChart;