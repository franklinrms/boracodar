import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

    button {
        cursor: pointer;
        border: none;
        &:disabled {
        cursor: default;
        }
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
`;

export default GlobalStyles;
