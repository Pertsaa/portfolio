import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  h1 {
    margin: 0.2em 0;
  }

  ul, ol {
    list-style: none;
    margin: 0;
  }
`;
