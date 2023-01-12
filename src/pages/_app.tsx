import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Header } from '../components/Header';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
