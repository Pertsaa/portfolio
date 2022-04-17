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
        <Title>Wan't to work with me?</Title>
        <Paragraph alignCenter>
          You can reach me on LinkedIn and GitHub!
        </Paragraph>
        <LinksContainer>
          <ContactLink href="#">
            <FaLinkedin size={40} />
          </ContactLink>
          <ContactLink href="https://github.com/Pertsaa" target="_blank">
            <FaGithub size={40} />
          </ContactLink>
        </LinksContainer>
      </Container>
    </Section>
  );
};

export default Contact;
