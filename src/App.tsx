import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import { GlobalStyles } from './components/GlobalStyles';
import Home from './pages/Home';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
