import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Temperature & Humidity Monitoring
        </h1>
        <p className="text-lg text-gray-600">
          Real-time environmental monitoring system with advanced analytics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link
          to="/temperature"
          className="group bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Temperature Monitoring</h2>
            <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-gray-600">
            Track temperature changes over time with detailed analytics and alerts
          </p>
        </Link>

        <Link
          to="/humidity"
          className="group bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Humidity Monitoring</h2>
            <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-gray-600">
            Monitor humidity levels with real-time updates and historical data
          </p>
        </Link>
      </div>

      <div className="mt-12 bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Latest Readings</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-600 mb-1">Temperature</p>
            <p className="text-3xl font-bold text-blue-700">24.5°C</p>
            <p className="text-sm text-blue-600 mt-1">Updated 5 min ago</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-green-600 mb-1">Humidity</p>
            <p className="text-3xl font-bold text-green-700">45%</p>
            <p className="text-sm text-green-600 mt-1">Updated 5 min ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;