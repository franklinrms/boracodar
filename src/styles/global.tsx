import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${props => props.theme.colors.background};
    background-image: url('/background.png');
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100vw;
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
  ::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 10px;
  }
  ::-webkit-scrollbar-corner {
    background: none;
    border: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #29292E;
    border-radius: 3px;
    cursor: move;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border: none;
  }

  button {
      cursor: pointer;
      border: none;
      background: none;
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
  .big-heading {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    font-size: clamp(20px, 8vw, 40px);
    padding-bottom: 3.75rem;
    padding-top: 3.75rem;

    &::before {
      content: '#boraCodar ';
      color: #C6ADFF;

    }

    span {
      color: #C6ADFF;
    }
  }
  .repository-link {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 2rem;
    background: linear-gradient(270.05deg, #523690 0.01%, #322159 99.98%);
    border-radius: 24px 24px 0 0;

    &::after {
      content: '🔗 Repositório do desafio';
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 0.875rem;
      font-weight: 700;
      color: #C4C4CC;
    }
  }
`;

export default GlobalStyles;
