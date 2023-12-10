import styled from "styled-components";

export const SAdd = styled.div`
  display: flex;
  & input {
    border: 1px solid black;
  }
  & button {
    padding: 5px;
    text-align: center;
    width: 150px;
    border: 1px solid black;
    overflow: hidden;
  }
  & p {
    padding: 5px;
    text-align: center;
    width: 150px;
    border: 1px solid black;
    overflow: hidden;
  }
  & .Add-button {
    position: absolute;
    width: 40px;
    height: 26px;
    background-color: #FFDEAD;
    transform: translate(274%, 4%);
    font-weight: 600;
    border: none;
  }
  & .Add-button:hover {
    background-color: #39a2b7;
  }
`;
