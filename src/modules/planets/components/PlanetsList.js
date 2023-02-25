import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function PlanetsList({ list }) {
  const { pathname } = useLocation();
  return (
    <ul>
      {list.map((item, index = 0) => {
        index++;
        return (
          <li key={crypto.randomUUID()}>
            <Link to={`${pathname}/${index}`}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PlanetsList;
