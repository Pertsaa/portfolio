import { FC, RefObject } from 'react';

import { Section, Container, Title, Paragraph } from '../shared-styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ContactLink, LinksContainer } from './styles';

interface Props {
  scrollRef: RefObject<HTMLDivElement>;
}

const Contact: FC<Props> = ({ scrollRef }) => {
  return (
    <Section ref={scrollRef}>
      <Container>
        <Title>Would you like to work with me?</Title>
        <Paragraph alignCenter>
          You can reach me on LinkedIn and GitHub!
        </Paragraph>
        <LinksContainer>
          <ContactLink
            href="https://www.linkedin.com/in/perttu-autti-198049238/"
            target="_blank"
          >
            <FaLinkedin size={40} title="LinkedIn logo" />
          </ContactLink>
          <ContactLink href="https://github.com/Pertsaa" target="_blank">
            <FaGithub size={40} title="GitHub logo" />
          </ContactLink>
        </LinksContainer>
      </Container>
    </Section>
  );
};

export default Contact;
