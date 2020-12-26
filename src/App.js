import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { MenuProvider } from './state';
import Navbar from './components/nav';

// routes
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg);
    color: var(--text);
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 64px;
  height: 100vh;
`;

const App = () => {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <MenuProvider>
          <Navbar />
        </MenuProvider>
        <ContentWrapper className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </ContentWrapper>
      </div>
    </Router>
  );
};

export default App;
