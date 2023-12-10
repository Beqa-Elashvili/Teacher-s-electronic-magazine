import { Chooses, Styledbutton } from "../ChoosessStyle/ChoosesStyle";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
export function ChooseSubject() {
  const { Subjects, currentSubject, setCurrentSubject } =
    useContext(GlobalContext);

  return (
    <Chooses>
      <div>
        <h1>საგნები</h1>
        <div className="items">
          {Subjects?.map((subject) => {
            const isactive = currentSubject?.id === subject.id;
            return (
              <Styledbutton
                isactive={isactive}
                key={subject.id}
                onClick={() => setCurrentSubject(subject.id)}
              >
                {subject.name}
              </Styledbutton>
            );
          })}
        </div>
      </div>
    </Chooses>
  );
}
