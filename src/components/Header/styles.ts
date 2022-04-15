import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0 0 10rem 0.25rem #500;
  color: white;

  background-image: url('banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 600px) {
    background-size: contain;
    background-position: bottom;
  }
`;

export const TextContent = styled.div`
  max-width: 100%;
  padding: 6em 0;

  @media screen and (min-width: 600px) {
    max-width: 40%;
  }
`;
