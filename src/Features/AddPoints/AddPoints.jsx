import { InfoStyle } from "../Info,Day,user/InfoStyled";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { useContext, useState } from "react";
import { Add } from "./exitingPointvalue/Add";

export function AddPoints() {
  const { users, days } = useContext(GlobalContext);

  return (
    <div>
      <InfoStyle>
        {users.map((user) => {
          return (
            <div key={user.id} className=" user">
              <div className="users">
                <h4>{user.username}</h4>
                <h4>{user.lastname}</h4>
              </div>
              <div className="users">
                {days?.map((day, index) => {
                  return <Add day={day} key={index} userid={user.id} />;
                })}
              </div>
            </div>
          );
        })}
      </InfoStyle>
    </div>
  );
}
