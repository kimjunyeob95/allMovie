import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html{box-sizing:border-box}
  *,*:before,*:after{box-sizing:inherit}

  html{-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;}
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video{margin:0;padding:0;border:0;vertical-align:baseline}
  article, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section,summary{display:block}
  audio, canvas, progress, video{display:inline-block}
  audio:not([controls]){display:none;height:0}
  ol, ul{list-style:none}
  blockquote, q{quotes:none}
  blockquote:before, blockquote:after, q:before, q:after{content:'';}
  img{vertical-align:top}
  mark{background:#ff0;color:#000}
  del{text-decoration:line-through}
  abbr[title], dfn[title]{cursor:help}
  hr{display:block;height:1px;border:0;border-top:1px solid #cccccc;margin:1em 0;padding:0}
  input, select, button, textarea, optgroup{margin:0;vertical-align:middle;font:inherit;color:inherit}
  button{display:inline-block;border:0;cursor:pointer;margin:0;padding:0;font-family:inherit;outline:none;overflow:visible;background:transparent}
  button::-moz-focus-inner{padding:0;border:0}
  label{vertical-align:middle}
  i, em, address{font-style:normal}
  a, a:link, a:visited, a:active, a:hover{text-decoration:none}
  table{border-collapse:collapse;border-spacing:0;width:100%}
  input{line-height:normal}
  input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}
  input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}
  input, textarea, button, select{box-sizing:border-box}
  textarea{resize:none;border:1px solid #ebebeb}
  textarea:focus{outline: none;}
  input[type="text"], input[type="password"],input[type="file"]{border-radius:0}
  button, input[type="reset"],
  input[type="button"], input[type="submit"]{overflow:visible;-webkit-appearance:none;border-radius:0;cursor:pointer}
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {-webkit-appearance: none; margin: 0;}
  ::placeholder{color:#999999;letter-spacing: -0.053rem; opacity:1}
  ::-webkit-input-placeholder{color:#999999;letter-spacing: -0.053rem;}
  ::-moz-placeholder{color:#999999;letter-spacing: -0.053rem;}
  :-ms-input-placeholder{color: #999999;letter-spacing: -0.053rem;}
  :-moz-placeholder{color:#999999;letter-spacing: -0.053rem;}
  select{-webkit-appearance:none;appearance:none;}

 
  
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
  body {
    font-family: 'Noto Sans KR', sans-serif;
    overflow-x: hidden;
  }

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  /* max-width: 1300px; */
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4b59f7' : '#58CBFF')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px;')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#58CBFF' : '#4b59f7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export default GlobalStyle;
