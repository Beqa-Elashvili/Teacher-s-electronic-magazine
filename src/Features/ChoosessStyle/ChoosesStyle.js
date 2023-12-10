import styled from "styled-components";

export const Chooses = styled.div`
  width: 470px;

  & button {
    width: 200px;
    padding: 12px;
    font-weight: 600;
  }
  & .items {
    display: flex;
    gap: 12px;
    margin-top: 20px;
  }
`;
export const Styledbutton = styled.button`
  width: 200px;
  padding: 12px;
  font-weight: 600;
  background-color: ${(props) => (props.isactive ? "royalblue" : ":")};
  color: ${(props) => (props.isactive ? "#ffffff" : "black")};
`;
