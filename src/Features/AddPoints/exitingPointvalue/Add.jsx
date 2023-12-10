import React, { useState, useContext } from "react";
import { SAdd } from "./Addstyle";

import { GlobalContext } from "../../../GlobalContext/GlobalContext";

export function Add({ day, userid }) {
  const [point, setPoint] = useState("");
  const [mode, setMode] = useState("view");
  const { globalpoints, setGlobalpoints, currentSubject } =
    useContext(GlobalContext);

  const existingPointIndex = globalpoints.findIndex(
    (user) =>
      user.weekid === day.weekid &&
      user.userid === userid &&
      user.dayid === day.id &&
      user.subject === currentSubject
  );

  const existingPoint =
    existingPointIndex !== -1 ? globalpoints[existingPointIndex] : null;

  const handleUpdate = () => {
    const newPoint = {
      userid: userid,
      weekid: day.weekid,
      dayid: day.id,
      value: point,
      subject: currentSubject,
    };

    if (existingPoint) {
      const updatedPoints = [...globalpoints];
      updatedPoints[existingPointIndex] = newPoint;
      setGlobalpoints(updatedPoints);
    } else {
      setGlobalpoints([...globalpoints, newPoint]);
    }

    setPoint("");
    setMode("view");
  };

  return (
    <SAdd>
      {mode === "view" && (
        <button onClick={() => setMode("update")}>
          {existingPoint ? existingPoint.value || "_" : "_"}
        </button>
      )}
      {mode === "update" && (
        <>
          <input
          type="number"
            placeholder="_"
            id={userid}
            value={point}
            onChange={(e) => setPoint(e.target.value)}
          />
          <button className="Add-button" onClick={handleUpdate}>
            save
          </button>
        </>
      )}
    </SAdd>
  );
}
