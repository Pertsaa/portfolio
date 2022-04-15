import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em;
  background-color: white;
  border-radius: 6px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const CardTitle = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.dark};
`;

export const CardFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

export const Tag = styled.div`
  padding: 0.5em 1em;
  background-color: #5b5;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  font-size: 0.62rem;

  margin-right: 0.5em;
  margin-bottom: 0.3rem;
`;
