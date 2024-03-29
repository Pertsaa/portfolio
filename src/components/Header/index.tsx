import { FC, RefObject } from 'react';

import Button from '../Button';
import Nav from '../Nav';
import { Container, Paragraph } from '../shared-styles';
import {
  HeaderContent,
  HeaderImage,
  StyledHeader,
  TextContent
} from './styles';

interface Props {
  scrollRefs: {
    aboutRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  };
}

const Header: FC<Props> = ({ scrollRefs }) => {
  const scrollToProjects = () => {
    if (scrollRefs.projectsRef && scrollRefs.projectsRef.current) {
      scrollRefs.projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledHeader>
      <Container wide>
        <Nav scrollRefs={scrollRefs} />

        <HeaderContent>
          <HeaderImage />
          <TextContent>
            <h1>Hi! I'm Perttu!</h1>
            <Paragraph justify>
              I'm a full stack web developer from Tampere, Finland. On this site you can
              find some of my most recent projects!
            </Paragraph>
            <Button onClick={scrollToProjects}>To projects</Button>
          </TextContent>
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;
