import { FC, useRef } from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header scrollRefs={{ aboutRef, projectsRef, contactRef }} />
      <About scrollRef={aboutRef} />
      <Projects scrollRef={projectsRef} />
      <Contact scrollRef={contactRef} />
    </>
  );
};

export default Home;
