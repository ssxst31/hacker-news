import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:text/:id" element={<DetailPage />} />
        <Route path="/:text" element={<ListPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<Navigate replace to="/main" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
