import { FC } from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: FC = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
