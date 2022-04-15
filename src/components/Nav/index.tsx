import { FC } from 'react';

import { NavList, Link, StyledNav } from './styles';

const Nav: FC = () => {
  return (
    <StyledNav>
      <NavList>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </NavList>
    </StyledNav>
  );
};

export default Nav;
