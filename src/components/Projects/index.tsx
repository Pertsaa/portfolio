import { FC } from 'react';

import { projects } from './data';
import { Container, Section } from '../shared-styles';
import { ProjectGrid } from './styles';
import ProjectCard from '../ProjectCard';

const Projects: FC = () => {
  return (
    <Section>
      <Container wide>
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
