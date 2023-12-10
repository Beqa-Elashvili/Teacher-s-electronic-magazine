import React, { createContext, useState, useEffect } from "react";

export const weeks_initial = [
  {
    id: "weeks-id-1",
    name: "პირველი კვირა",
  },
  {
    id: "weeks-id-2",
    name: "მეორე კვირა",
  },
  {
    id: "weeks-id-3",
    name: "მესამე კვირა",
  },
];

const subjects_initial = [
  { id: "subject-id-1", name: "ქართული" },
  { id: "subject-id-2", name: "მათემატიკა" },
  { id: "subject-id-3", name: "ინგლისური" },
];

const days_initial = [
  { id: "day - 1", weekid: "weeks-id-1", day: "ორშაბათი" },
  { id: "day - 2", weekid: "weeks-id-1", day: "სამშაბათი" },
  { id: "day - 3", weekid: "weeks-id-1", day: "ოთხშაბათი" },
  { id: "day - 4", weekid: "weeks-id-1", day: "ხუთშაბათი" },
  { id: "day - 5", weekid: "weeks-id-1", day: "პარასკევი" },

  { id: "day - 6", weekid: "weeks-id-2", day: "ორშაბათი" },
  { id: "day - 7", weekid: "weeks-id-2", day: "სამშაბათი" },
  { id: "day - 8", weekid: "weeks-id-2", day: "ოთხშაბათი" },
  { id: "day - 9", weekid: "weeks-id-2", day: "ხუთშაბათი" },
  { id: "day - 10", weekid: "weeks-id-2", day: "პარასკევი" },

  { id: "day - 11", weekid: "weeks-id-3", day: "ორშაბათი" },
  { id: "day - 12", weekid: "weeks-id-3", day: "სამშაბათი" },
  { id: "day - 13", weekid: "weeks-id-3", day: "ოთხშაბათი" },
  { id: "day - 14", weekid: "weeks-id-3", day: "ხუთშაბათი" },
  { id: "day - 15", weekid: "weeks-id-3", day: "პარასკევი" },
];

export const GlobalContext = createContext({
  users: [
    {
      uuid: "",
      firstname: "",
      lastname: "",
      weekId: [],
      grades: {},
    },
  ],
  setUsers: (data) => {},
});

export function GlobalProvaider({ children }) {
  const [users, setUsers] = useState([]);
  const [weeksDay, setWeeksDay] = useState(weeks_initial);
  const [days, setDays] = useState([]);
  const [currentWeekDay, setCurrentWeekDay] = useState();
  const [Subjects, setSubjects] = useState(subjects_initial);
  const [currentSubject, setCurrentSubject] = useState();
  const [globalpoints, setGlobalpoints] = useState([{ grade: "0" }]);

  const changeCurrentWeekDay = (id) => {
    if (id) {
      setDays(days_initial.filter((day) => day.weekid === id));
      setCurrentWeekDay(id);
    }
  };
  const changeCurrentSubject = (id) => {
    if (id) {
      const Subject = subjects_initial.find((subject) => subject.id === id);
      setCurrentSubject(Subject);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        users,
        setUsers,
        weeksDay,
        setWeeksDay,
        Subjects,
        setSubjects,
        currentSubject,
        setCurrentSubject: changeCurrentSubject,

        days,
        setDays,
        globalpoints,
        setGlobalpoints,
        currentWeekDay,
        setCurrentWeekDay: changeCurrentWeekDay,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
