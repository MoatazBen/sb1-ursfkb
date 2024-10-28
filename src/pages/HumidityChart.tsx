import React, { useState } from 'react';
import TimeRangeSelector from '../components/TimeRangeSelector';
import ChartCard from '../components/ChartCard';
import { Droplets } from 'lucide-react';

const generateHumData = (points: number) => {
  const data = [];
  const now = new Date();
  for (let i = points; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 3600000).toISOString();
    data.push({
      timestamp,
      value: 40 + Math.random() * 20,
    });
  }
  return data;
};

const HumidityChart = () => {
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('24h');
  const humData = generateHumData(24);
  const currentHum = humData[humData.length - 1].value.toFixed(1);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-8">
        <Droplets className="w-8 h-8 text-green-600 mr-3" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Humidity Monitoring</h1>
          <p className="text-gray-600">Current humidity: {currentHum}%</p>
        </div>
      </div>

      <TimeRangeSelector selectedRange={timeRange} onRangeChange={setTimeRange} />

      <ChartCard
        title="Humidity History"
        data={humData}
        color="#10B981"
        unit="%"
      />
    </div>
  );
};

export default HumidityChart;