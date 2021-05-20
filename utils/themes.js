import {createGlobalStyle} from "styled-components";

export const lightTheme = {
    body: '#fff',
    fontColor: '#000',
    charBackground: 'rgb(234, 234, 234)'
}

export const darkTheme = {
    body: '#343434',
    fontColor: '#fff',
    charBackground: '#171717'
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    transition: background-color 0.2s linear 0s
  }
  
  p {
    color: ${props => props.theme.fontColor};
    transition: color 0.2s linear 0s;
  }
  
  .character-card {
    background-color: ${props => props.theme.charBackground};
    transition: background-color 0.2s linear 0s
  }

  .episode-card {
    background-color: ${props => props.theme.charBackground};
    transition: background-color 0.2s linear 0s
  }
  
  .episode-data {
    color: ${props => props.theme.fontColor}
  }
  
  a {
    color: ${props => props.theme.fontColor};
    transition: color 0.2s linear 0s;
  }
`