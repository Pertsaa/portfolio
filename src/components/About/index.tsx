import { FC, RefObject } from 'react';

import { Section, Container, Title, Paragraph, A } from '../shared-styles';

interface Props {
  scrollRef: RefObject<HTMLDivElement>;
}

const About: FC<Props> = ({ scrollRef }) => {
  return (
    <Section ref={scrollRef}>
      <Container>
        <Title>About me</Title>
        <Paragraph justify>
          I first got into software development some 5 years ago when I found
          scripting through video games. Since then I have worked on several
          personal projects with React and React Native and I'm looking to
          improve myself as a full stack web developer with focus in frontend
          development.
        </Paragraph>
        <Paragraph justify>
          Currently, I'm studying my third year of computer science in
          <A href="https://www.tuni.fi/en">Tampere University</A> and I'm about
          to finish my bachelor's thesis this spring. Along with my own software
          projects I have also completed the
          <A href="https://fullstackopen.com/en/">Full Stack Open 2021</A>
          course.
        </Paragraph>
      </Container>
    </Section>
  );
};

export default About;
