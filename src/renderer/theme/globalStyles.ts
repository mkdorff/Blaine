import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body, #app {
    height: 100vh;
    margin: 0;
    width: 100vw;
  }

  /* Deal with this stuff later */
  #app {
    /* display: grid; */
    display: flex;
    flex-direction: column;
  }
`
