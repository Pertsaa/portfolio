import { FC, RefObject } from 'react';

import { projects } from './data';
import { Container, Section, Title } from '../shared-styles';
import { ProjectGrid } from './styles';
import ProjectCard from '../ProjectCard';

interface Props {
  scrollRef: RefObject<HTMLDivElement>;
}

const Projects: FC<Props> = ({ scrollRef }) => {
  return (
    <Section ref={scrollRef}>
      <Container wide>
        <Title>Projects</Title>
        <ProjectGrid>
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </ProjectGrid>
      </Container>
    </Section>
  );
};

export default Projects;
