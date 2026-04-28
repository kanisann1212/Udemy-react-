import { useState } from "react";
import Profile from "./components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [filtername,setFiltername]=useState("");
  return (
    <>
      <h3>練習問題</h3>
      <p>名前を入力してね</p>
      <input type="text" value={filtername} onChange={(e)=>setFiltername(e.target.value)} />
      <ul>
        {persons
        .filter((person)=>person.name.indexOf(filtername) !==-1)
        .map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
