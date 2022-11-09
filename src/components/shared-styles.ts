import styled from 'styled-components';

export const Section = styled.section`
  padding: 4rem 0;
  color: ${({ theme }) => theme.colors.text.light};

  &:nth-child(2n + 1) {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;

interface ContainerModifiers {
  wide?: boolean;
}

export const Container = styled.div<ContainerModifiers>`
  width: ${({ wide }) => (wide ? 'min(80%, 1200px)' : 'min(80%, 600px)')};
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-top: 0;
`;

interface ParagraphModifiers {
  alignCenter?: boolean;
  justify?: boolean;
}

export const Paragraph = styled.p<ParagraphModifiers>`
  text-align: ${({ alignCenter, justify }) =>
    alignCenter ? 'center' : justify ? 'justify' : 'start'};
`;

export const A = styled.a`
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0.2em;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &:focus {
    outline: none;
  }
`;
