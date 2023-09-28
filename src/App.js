import './App.css';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: Kumbh Sans;

    ::-webkit-scrollbar {
      width: .5rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #000000;
    }
  }
`;


const App = () => (
  <>
    <GlobalStyle />
    <Home />
  </>
)

export default App;