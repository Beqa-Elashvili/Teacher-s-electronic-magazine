import { AddUser } from "./Features/AddUser/AddUser";
import { ChooseWeeks } from "./Features/ChooseWeeks/ChooseWeeks";
import { ChooseSubject } from "./Features/ChooseSubject/ChooseSubject";
import { Info } from "./Features/Info,Day,user/info";
import { AddPoints } from "./Features/AddPoints/AddPoints";
import { InfoStyle } from "./Features/Info,Day,user/InfoStyled";
import { StyledDiv } from "./styled.div";

function App() {
  return (
    <StyledDiv>
      <h6>First, please select a subject and a week</h6>
      <div>
        <AddUser />
      </div>
      <div className="wrapper">
        <div className="Chooser">
          <ChooseSubject />
          <ChooseWeeks />
        </div>
        <div>
          <InfoStyle>
            <div className="child-wrapper">
              <Info />
              <AddPoints />
            </div>
          </InfoStyle>
        </div>
      </div>
    </StyledDiv>
  );
}

export default App;
