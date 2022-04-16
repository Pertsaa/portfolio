import { FC } from 'react';

import { Container } from '../shared-styles';
import { MobileImage, StyledHeader, TextContent } from './styles';
import Button from '../Button';
import Nav from '../Nav';

const Header: FC = () => {
  return (
    <StyledHeader>
      <Container wide>
        <Nav />

        <MobileImage />

        <TextContent>
          <h1>Hi!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            dolore ad nihil tempora, provident repellendus.
          </p>
          <Button href="#">Contact me</Button>
        </TextContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;
