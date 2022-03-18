import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainPage from './src/pages/MainPage';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/" element={<Navigate replace to="/main" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
