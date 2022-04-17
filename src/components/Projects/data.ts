import { Project } from '../../types';

export const projects: Project[] = [
  {
    title: 'Portfolio',
    description:
      'This portfolio site for showcasing my most ambitious projects',
    url: 'https://github.com/Pertsaa/portfolio',
    tags: ['TypeScript', 'React', 'Styled Components', 'CSS'],
  },
  {
    title: 'Pokkne API',
    description:
      'A graphql API for matching user input into chatbot intents and responses',
    url: 'https://github.com/Pertsaa/pokkne-api',
    tags: ['TypeScript', 'NodeJS', 'TypeGraphQL', 'TypeORM'],
  },
  {
    title: 'Pokkne Control',
    description:
      'A control panel application for managing chatbots and intents in Pokkne API',
    url: 'https://github.com/Pertsaa/pokkne-control',
    tags: [
      'TypeScript',
      'React',
      'Styled Components',
      'Apollo Client',
      'React Router',
      'CSS',
    ],
  },
  {
    title: 'TEA5767',
    description: 'An Arduino library for controlling the TEA5767 radio module.',
    tags: ['C++', 'Arduino'],
    url: 'https://github.com/Pertsaa/TEA5767',
  },
  {
    title: 'Pokkne Discord',
    description: 'A discord bot.',
    url: 'https://github.com/Pertsaa/pokkne-discord',
    tags: ['TypeScript', 'NodeJS', 'DiscordJS'],
  },
];
