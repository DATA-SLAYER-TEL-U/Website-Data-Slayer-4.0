import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { MlcPage } from './pages/MlcPage';
import { DacPage } from './pages/DacPage';
import { EventPage } from './pages/EventPage';
import { ShortenPage } from './pages/ShortenPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mlc" element={<MlcPage />} />
          <Route path="dac" element={<DacPage />} />
          <Route path="event" element={<EventPage />} />
          <Route path="shorten" element={<ShortenPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
