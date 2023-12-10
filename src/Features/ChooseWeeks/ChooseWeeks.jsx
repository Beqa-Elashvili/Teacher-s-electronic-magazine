import { useContext } from "react";
import { Chooses } from "../ChoosessStyle/ChoosesStyle";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { Styledbutton } from "../ChoosessStyle/ChoosesStyle";

export function ChooseWeeks() {
  const { weeksDay, currentWeekDay, setCurrentWeekDay } =
    useContext(GlobalContext);
  return (
    <Chooses>
      <div>
        <h1>ფილტრი</h1>
        <div className="items">
          {weeksDay?.map((week) => {
            const isactive = currentWeekDay === week.id;
            return (
              <Styledbutton
                isactive={isactive}
                key={week.id}
                onClick={() => setCurrentWeekDay(week.id)}
              >
                {week.name}
              </Styledbutton>
            );
          })}
        </div>
      </div>
    </Chooses>
  );
}
