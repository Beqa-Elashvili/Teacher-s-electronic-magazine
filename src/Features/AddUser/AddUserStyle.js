import styled from "styled-components";

export const User = styled.div`
  border: 1px black solid;
  display: inline-flex;
  padding: 12px;
  & div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    & input {
      padding: 12px;
    }
    & button {
      padding: 12px;
      font-weight: 600;
    }
  }
`;
