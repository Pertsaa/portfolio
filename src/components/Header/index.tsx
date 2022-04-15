import { FC } from 'react';

import { StyledHeader, TextContent } from './styles';
import Button from '../Button';
import Nav from '../Nav';

const Header: FC = () => {
  return (
    <StyledHeader>
      <Nav />

      <TextContent>
        <h1>Hi!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          dolore ad nihil tempora, provident repellendus.
        </p>
        <Button href="#">Contact me</Button>
      </TextContent>
    </StyledHeader>
  );
};

export default Header;
