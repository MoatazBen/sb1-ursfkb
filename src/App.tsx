import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import AuthGuard from './components/AuthGuard';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import TemperatureChart from './pages/TemperatureChart';
import HumidityChart from './pages/HumidityChart';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/*"
            element={
              <AuthGuard>
                <div className="min-h-screen bg-gray-50">
                  <Navbar />
                  <div className="container mx-auto px-4 py-8">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/temperature" element={<TemperatureChart />} />
                      <Route path="/humidity" element={<HumidityChart />} />
                    </Routes>
                  </div>
                </div>
              </AuthGuard>
            }
          />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;