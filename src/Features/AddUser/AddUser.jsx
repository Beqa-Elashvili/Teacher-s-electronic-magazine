import { User } from "./AddUserStyle";
import { v4 as uuid4 } from "uuid";
import { useContext, useEffect, useState } from "react";
import {
  GlobalContext,
  GlobalProvaider,
} from "../../GlobalContext/GlobalContext";

export function AddUser() {
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const { users, setUsers, currentWeekDay, currentSubject } =
    useContext(GlobalContext);

  function createUsers() {
    if (!username.trim("") || !lastname.trim("")) {
      alert("Please enter both username and lastname");
      return;
    }
    setUsers([
      ...users,
      {
        id: uuid4(),
        username,
        lastname,
        weekId: currentWeekDay,
        subjectId: currentSubject,
      },
    ]);
    setUsername("");
    setLastname("");
  }

  return (
    <User>
      <div>
        <h3>ახალი მოსწავლის დამატება</h3>
        <input
          placeholder="მოწავლის სახელი"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="მოწავლის გვარი"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <button
          disabled={!currentWeekDay || !currentSubject}
          onClick={createUsers}
        >
          მოსწავლის დამატება
        </button>
      </div>
    </User>
  );
}

