import styled, { createGlobalStyle } from 'styled-components';
import {primaryColor, primaryDarkColor, sucessColor, errorColor} from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${primaryDarkColor};
    color: ${primaryDarkColor};
  }

  html, border-style, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${primaryColor};
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 500ms;


    &:hover {
    filter: brightness(75%);
  }
  }

  a {
    text-decoration: none;
    color: ${primaryColor};

  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toas--success {
    background-color: ${sucessColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toas--error {
    background-color: ${errorColor};
  }

  `;

export const Container = styled.section`
  max-width: 640px;
  background-color: white;
  margin: 30px auto;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);

`;
