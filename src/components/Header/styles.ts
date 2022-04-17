import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0 0 10rem 0.25rem #500;
  color: white;
  padding-bottom: 4rem;
`;

export const HeaderContent = styled.div`
  display: grid;
  max-width: 800px;
  margin: 4rem auto;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    justify-items: start;
  }
`;

export const HeaderImage = styled.div`
  width: min(80%, 320px);
  height: 0;
  padding-bottom: min(80%, 320px);

  border: 5px solid white;
  border-radius: 50%;

  background-image: url('banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 80%;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;
