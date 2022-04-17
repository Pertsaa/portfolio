import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0 0 10rem 0.25rem #500;
  color: white;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 600px) {
    background-image: url('banner.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }
`;

export const MobileImage = styled.div`
  border: 5px solid white;
  border-radius: 50%;
  width: 70%;
  height: 0;
  padding-bottom: 70%;
  margin: 0 auto;
  margin-top: 4rem;

  background-image: url('banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 80%;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const TextContent = styled.div`
  margin-bottom: 4rem;

  @media screen and (min-width: 600px) {
    max-width: 40%;
  }
`;
