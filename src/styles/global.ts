import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${theme.blue};
  }

  button {
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  body {
    background: ${theme['base-background']};
    color: ${theme['blue-text']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Roboto', sans-serif;
  }
`}


`
