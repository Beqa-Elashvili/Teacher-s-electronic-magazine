import styled from "styled-components";

export const InfoStyle = styled.div`
  & h4 {
    border: 1px black solid;
    width: 150px;
    text-align: center;
    padding: 4px;
    overflow: hidden;
  }
  & input {
    padding: 5px;
    text-align: center;
    width: 150px;
    border: 1px solid black;
    overflow: hidden;
  }
  & .users {
    display: flex;
  }
  & .user {
    display: flex;
    justify-content: space-around;
  }
  & .child-wrapper {
    margin-top: 30px;
  }
`;
