import { FC, RefObject } from 'react';

import { NavList, StyledNav, NavLink } from './styles';

interface Props {
  scrollRefs: {
    aboutRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  };
}

const Nav: FC<Props> = ({ scrollRefs }) => {
  const scrollToAbout = () => {
    if (scrollRefs.aboutRef && scrollRefs.aboutRef.current) {
      scrollRefs.aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    if (scrollRefs.projectsRef && scrollRefs.projectsRef.current) {
      scrollRefs.projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (scrollRefs.contactRef && scrollRefs.contactRef.current) {
      scrollRefs.contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledNav>
      <NavList>
        <li>
          <NavLink onClick={scrollToAbout}>About</NavLink>
        </li>
        <li>
          <NavLink onClick={scrollToProjects}>Projects</NavLink>
        </li>
        <li>
          <NavLink onClick={scrollToContact}>Contact</NavLink>
        </li>
      </NavList>
    </StyledNav>
  );
};

export default Nav;
