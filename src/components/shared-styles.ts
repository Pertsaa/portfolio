import styled from 'styled-components';

export const Section = styled.section`
  padding: 2rem 0;

  &:nth-child(2n + 1) {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;

interface ContainerModifiers {
  wide?: boolean;
}

export const Container = styled.div<ContainerModifiers>`
  width: ${({ wide }) => (wide ? 'min(80%, 1000px)' : 'min(80%, 600px)')};
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: coral;
  text-align: center;
`;

interface ParagraphModifiers {
  alignCenter?: boolean;
}

export const Paragraph = styled.p<ParagraphModifiers>`
  color: ${({ theme }) => theme.colors.text.light};
  text-align: ${({ alignCenter }) => (alignCenter ? 'center' : 'start')};
`;
