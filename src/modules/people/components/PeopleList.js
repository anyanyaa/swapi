import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function PeopleList({ list }) {
  const { pathname } = useLocation();

  return (
    <ul>
      {list.map((person, i = 0) => {
        i++;
        return (
          <li key={crypto.randomUUID()}>
            <Link to={`${pathname}/${i}`}>{person.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PeopleList;
