
import Home from './main-components/Home'
import React from 'react';
import {Routes, Route } from 'react-router-dom';

const RoutesElements = () => {
  <Routes>
    <Route path="/" element={<Home />} />
</Routes>
}

export default RoutesElements;
