import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0 0 10rem 0.25rem #500;
  color: white;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    background-image: url('banner.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const MobileImage = styled.div`
  border: 5px solid white;
  border-radius: 50%;
  width: 90%;
  height: 0;
  padding-bottom: 90%;
  margin: 0 auto;
  margin-top: 2rem;

  background-image: url('banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 80%;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const TextContent = styled.div`
  max-width: 100%;
  margin-bottom: 4rem;

  @media screen and (min-width: 600px) {
    max-width: 40%;
  }
`;
