import React from 'react';
import MainRoutes from './routes/MainRoutes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFD8A9] text-[#4E342E] px-[8%] pt-28 pb-10">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
