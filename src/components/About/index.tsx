import { FC } from 'react';

import { Section, Container, Title, Paragraph } from '../shared-styles';

const About: FC = () => {
  return (
    <Section>
      <Container>
        <Title>About me</Title>
        <Paragraph alignCenter>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          autem aspernatur explicabo placeat accusantium ipsum similique
          deleniti ducimus. Minus, alias.
        </Paragraph>
      </Container>
    </Section>
  );
};

export default About;
