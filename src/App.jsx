import React from 'react';
import MainRoutes from './routes/MainRoutes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-[#1e1e2f] text-white">
      <Navbar />
      <main className="px-6 py-[3%]">
        <MainRoutes />
      </main>
    </div>
  );
};

export default App;
