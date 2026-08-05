import React from 'react';
import Hero from '../components/Hero/Hero';
import Welcome from '../components/Welcome/Welcome';
import AboutTemple from '../components/AboutTemple/AboutTemple';
import DarshanTimings from '../components/DarshanTimings/DarshanTimings';
import Programs from '../components/Programs/Programs';
import Activities from '../components/Activities/Activities';
import Gallery from '../components/Gallery/Gallery';
import YouTube from '../components/YouTube/YouTube';
import DonateCTA from '../components/DonateCTA/DonateCTA';
import Map from '../components/Map/Map';

const Home = () => {
  return (
    <main>
      <Hero />
      <Welcome />
      <AboutTemple />
      <DarshanTimings />
      <Programs />
      <Activities />
      <Gallery />
      <YouTube />
      <DonateCTA />
      <Map />
    </main>
  );
};

export default Home;
