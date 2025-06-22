import React from 'react';
import MainRoutes from './routes/MainRoutes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen relative z-0 text-white px-[8%] pt-28 pb-10">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0F2027] via-[#2C5364] to-[#1A1A2E]" />

      {/* Optional glassy overlay */}
      <div className="absolute inset-0 -z-10 backdrop-blur-sm bg-black/20" />

      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
