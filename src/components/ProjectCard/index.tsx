import { FC } from 'react';

import { Project } from '../../types';
import { Paragraph } from '../shared-styles';
import { Card, CardFooter, CardTitle, Tag } from './styles';
import Button from '../Button';

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <Card>
      <div>
        <CardTitle>{project.title}</CardTitle>
        <Paragraph>{project.description}</Paragraph>
      </div>
      <CardFooter>
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </CardFooter>
      <Button href={project.url} target="_blank">
        Open in GitHub
      </Button>
    </Card>
  );
};

export default ProjectCard;
