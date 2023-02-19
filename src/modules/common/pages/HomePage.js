import React from "react";
import { Link, NavLink } from "react-router-dom";

function HomePage() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/people">People</NavLink>
        </li>
        <li>
          <NavLink to="/films">Films</NavLink>
        </li>
        <li>
          <NavLink to="/starships">Starships</NavLink>
        </li>
        <li>
          <NavLink to="/vehicles">Vehicles</NavLink>
        </li>
        <li>
          <NavLink to="/species">Species</NavLink>
        </li>
        <li>
          <NavLink to="/planets">Planets</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HomePage;
