import { css } from "lit-element";

export default css`
  * {
    outline: none;
    box-sizing: inherit;
    color: #1a1b1c;
    font-weight: 400;
  }

  html,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    color: #1a1b1c;
  }

  span {
    color: inherit;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    box-sizing: border-box;
    display: block;
    font-size: 0.875rem;
    margin: 0;
    padding: 0;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  html {
    font-size: 16px;
    /** for IE */
    -ms-overflox-style: none;
  }

  /* body::-webkit-scrollbar {
    display: none;
    height: 0;
    width: 0;
  } */

  pre {
    font: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #17a1ff;
  }

  b {
    font-weight: 700;
  }
  input,
  button,
  textarea {
    font-family: inherit;
  }
  /** ie input x버튼 삭제 */
  input::-ms-clear {
    display: none;
  }

  input[type="checkbox"] + input {
    display: none;
  }

  select {
    font-size: 100%;
  }
  .blue {
    color: #1535b3;
  }
  .bg-blue {
    background-color: #1535b3 !important;
  }

  .flex {
    display: flex;
  }
  .ft32 {
    font-size: 2rem;
    line-height: 1.4;
  }
  .ft26 {
    font-size: 1.625rem;
    line-height: 1.4;
  }
  .ft24 {
    font-size: 1.5rem;
    line-height: 1.4;
  }
  .ft21 {
    font-size: 1.3125rem;
    line-height: 1.4;
  }
  .ft15 {
    font-size: 0.9375rem;
    line-height: 1.4;
  }
  .ft12 {
    font-size: 0.75rem;
    line-height: 1.4;
  }
  .input-error-message {
    margin-top: 4px;
    display: flex;
    align-items: center;
    color: #ff0322;
    position: relative;
  }

  .input-error-message p {
    margin-left: 17px;
    font-size: 14px;
    line-height: 21px;
    color: #ff0322;
    width: calc(100% - 14px);
  }
  .input-error-message svg {
    width: 14px;
    height: 14px;
    position: absolute;
    top: 4px;
    left: 0;
  }

  .required-mark {
    color: red;
    margin-left: 2px;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .hide {
    display: none;
  }
  .hidden-title {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    background-color: transparent;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }
`;
