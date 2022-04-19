import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0 0 10rem 0.25rem #500;
  color: white;
`;

export const HeaderContent = styled.div`
  display: grid;
  padding: 4rem 0;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
`;

export const HeaderImage = styled.div`
  width: min(80%, 320px);
  height: 0;
  padding-bottom: min(80%, 320px);

  border: 5px solid white;
  border-radius: 50%;

  background-image: url('/portfolio/banner.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;
