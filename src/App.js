import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from 'components/Layout';
import Home from 'pages/Home';
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="dashboard" element={<Home />} />
        </Route>
        <Route path="*" element={<Main />} />
      </Routes>
    </>
  );
}
