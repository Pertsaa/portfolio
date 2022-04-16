import { FC } from 'react';

import { Section, Container, Title, Paragraph } from '../shared-styles';

const Contact: FC = () => {
  return (
    <Section>
      <Container>
        <Title>Contact</Title>
        <Paragraph>
          If youd like to work with me you can reach me from links below!
        </Paragraph>
      </Container>
    </Section>
  );
};

export default Contact;
