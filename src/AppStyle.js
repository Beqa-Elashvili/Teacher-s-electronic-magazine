import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  & .Chooser {
    display: flex;
    justify-content: space-around;
  }
  & button {
    cursor: pointer;
  }
  & button:hover {
    background-color:royalblue;
    color: #ffffff;
  }
`;
