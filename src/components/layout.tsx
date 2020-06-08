import React from 'react';
import { ThemeProvider } from 'styled-components';
import ScrollToTop from 'react-scroll-up';
import Navbar from './navbar/navbar';
import Newsletter from './newsletter/newsletter';
import Footer from './footer/footer';
import ScrollUpButton from './scroll-up-button/scroll-up-button';
import ResetCss from './reset-css';
import GlobalStyle, { theme } from '../theme';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <ResetCss />
      <Navbar />
      {children}
      <Newsletter />
      <Footer>
        Copyright &copy;
        {' '}
        {new Date().getFullYear()}
        <a href="https://redq.io/"> RedQ, Inc.</a>
      </Footer>
      <ScrollToTop
        showUnder={300}
        duration={700}
        easing="easeInOutCubic"
        style={{ bottom: 30, right: 20 }}
      >
        <ScrollUpButton />
      </ScrollToTop>
    </>
  </ThemeProvider>
);

export default Layout;
