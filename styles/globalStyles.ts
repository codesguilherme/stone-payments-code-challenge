import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "Sharon Sans";
    font-weight: 400;
    src: url(/fonts/SharonSans/SharonSans-Regular.woff) format(woff);
  }

  @font-face {
    font-family: "Sharon Sans";
    font-weight: 500;
    src: url(/fonts/SharonSans/SharonSans-Medium.woff2) format(woff2);
  }

  @font-face {
    font-family: "Circular Std";
    font-weight: 450;
    src: url(/fonts/CircularStd-Book.woff) format(woff);
  }

  @font-face {
    font-family: "Roboto";
    font-weight: 400;
    src: url(/fonts/Roboto/Roboto-Regular.woff2) format(woff2);
  }

  @font-face {
    font-family: "Roboto";
    font-weight: 500;
    src: url(/fonts/Roboto/Roboto-Medium.woff2) format(woff2);
  }
`;

export default GlobalStyles;
