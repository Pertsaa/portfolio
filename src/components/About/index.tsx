import { FC, RefObject } from 'react';

import { A, Container, Paragraph, Section, Title } from '../shared-styles';

interface Props {
  scrollRef: RefObject<HTMLDivElement>;
}

const About: FC<Props> = ({ scrollRef }) => {
  return (
    <Section ref={scrollRef}>
      <Container>
        <Title>About me</Title>
        <Paragraph justify>
          I first got into software development around 5 years ago when I
          started scripting new features into videogames. Since then I have
          shifted my focus into full stack web development and I have built
          many projects with React, React Native and NodeJS. As a developer
          I like to try out multiple technologies to find the best ways of
          writing good software.
        </Paragraph>
        <Paragraph justify>
          I completed my bachelor's thesis in Information Technology at
          <A href="https://www.tuni.fi/en">Tampere University</A> in the
          spring of 2022 and have since been working as a full stack
          developer at <A href="https://www.taitounited.fi/en/">Taito United</A>.
          While I have done most of my projects with TypeScript and React I would
          also like to work with technologies like Go and Svelte in the future.
        </Paragraph>
      </Container>
    </Section>
  );
};

export default About;
