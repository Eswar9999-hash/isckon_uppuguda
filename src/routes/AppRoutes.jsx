import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import DailyDarshan from '../pages/DailyDarshan';
import Programs from '../pages/Programs';
import Gallery from '../pages/Gallery';
import Volunteer from '../pages/Volunteer';
import Contact from '../pages/Contact';
import Donate from '../pages/Donate';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="daily-darshan" element={<DailyDarshan />} />
        <Route path="programs" element={<Programs />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
