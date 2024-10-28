import React, { useState } from 'react';
import TimeRangeSelector from '../components/TimeRangeSelector';
import ChartCard from '../components/ChartCard';

const generateMockData = (points: number) => {
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

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('24h');
  const tempData = generateMockData(24);
  const humData = generateMockData(24);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Monitor your environmental conditions in real-time</p>
      </div>

      <TimeRangeSelector selectedRange={timeRange} onRangeChange={setTimeRange} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartCard
          title="Temperature"
          data={tempData}
          color="#3B82F6"
          unit="°C"
        />
        <ChartCard
          title="Humidity"
          data={humData}
          color="#10B981"
          unit="%"
        />
      </div>
    </div>
  );
};

export default Dashboard;