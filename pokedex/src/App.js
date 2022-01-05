import React from "react";
import Router from './Router/Router'
import { createGlobalStyle } from 'styled-components'
import GlobalState from './contexts/GlobalState'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <GlobalState>
    <GlobalStyle/>
      <Router/>
    </GlobalState>
  );
}

export default App;
