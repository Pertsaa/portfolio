import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: string;
      secondary: string;
      secondaryAccent: string;
      text: {
        primary: string;
        dark: string;
        light: string;
      };
    };
  }
}
