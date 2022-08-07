import { createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation:wght@500&display=swap');

  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Edu NSW ACT Foundation', cursive;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    line-height: 1.5;
  }
  h1 {
    font-family: 'Edu NSW ACT Foundation', cursive;
  }
  img {
    max-width: 100%;
}
`
export default GlobalStyles