import styled, { css } from 'styled-components';

export const Section = styled.section`
  padding: 2rem 0;

  &:nth-child(2n + 1) {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;

export const Container = styled.div`
  width: min(80%, 600px);
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: coral;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text.light};
  text-align: center;
`;
