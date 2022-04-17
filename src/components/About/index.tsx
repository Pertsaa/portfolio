import { FC, RefObject } from 'react';

import { Section, Container, Title, Paragraph } from '../shared-styles';

interface Props {
  scrollRef: RefObject<HTMLDivElement>;
}

const About: FC<Props> = ({ scrollRef }) => {
  return (
    <Section ref={scrollRef}>
      <Container>
        <Title>About me</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed
          incidunt porro aspernatur praesentium officia harum. Aut nemo
          possimus, nulla quas voluptatum saepe rerum. Facere.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          minus accusantium provident autem incidunt asperiores aperiam dolores,
          ipsam dolorem rerum!
        </Paragraph>
      </Container>
    </Section>
  );
};

export default About;
