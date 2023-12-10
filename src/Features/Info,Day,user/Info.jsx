import { InfoStyle } from "./InfoStyled";


export function Info() {
  return (
    <div>
      <InfoStyle>
        <div>
          <div className="user">
            <div className="users">
              <h4>სახელი</h4>
              <h4>გვარი</h4>
            </div>
            <div className="users">
              <h4>ორშაბათი</h4>
              <h4>სამშაბათი</h4>
              <h4>ოთხშაბათი</h4>
              <h4>ხუთშაბათი</h4>
              <h4>პარასკევი</h4>
            </div>
          </div>
        </div>
      </InfoStyle>
    </div>
  );
}
