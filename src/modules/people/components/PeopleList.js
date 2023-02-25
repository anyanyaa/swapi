import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function PeopleList({ list }) {
  const { pathname } = useLocation();

  return (
    <ul>
      {list.map((person, index = 0) => {
        index++;
        return (
          <li key={crypto.randomUUID()}>
            <Link to={`${pathname}/${index}`}>{person.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PeopleList;
