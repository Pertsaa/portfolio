import styled from 'styled-components';

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContactLink = styled.a`
  color: black;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:not(:first-child) {
    margin-left: 0.5rem;
  }

  &:hover,
  &:focus {
    transform: scale(0.98);
    color: ${p => p.theme.colors.text.primary};
    outline: none;
  }
`;
