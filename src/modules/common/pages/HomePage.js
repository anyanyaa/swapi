import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h2>Home page</h2>
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
    </div>
  );
}

export default HomePage;
