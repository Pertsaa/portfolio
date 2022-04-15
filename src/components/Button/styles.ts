import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  background-color: #eee;
  color: ${({ theme }) => theme.colors.text.dark};
  border-radius: 0.3em 1.5em;
  border: none;
  padding: 0.75em 2em;

  font-size: 0.835rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    transform: scale(0.97);
  }
`;
