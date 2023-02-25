import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import StarshipsModule from "./modules/starships/StarshipsModule";
import VehiclesModule from "./modules/vehicles/VehiclesModule";
import SpeciesModule from "./modules/species/SpeciesModule";
import PlanetsModule from "./modules/planets/PlanetsModule";
import HomePage from "./modules/common/pages/HomePage";
import NotFoundPage from "./modules/common/pages/NotFoundPage";
import PeopleModule from "./modules/people/PeopleModule";
import { Box, CircularProgress, LinearProgress } from "@mui/material";
import FilmsModule from "./modules/films/FilmsModule";

export function CircularIndeterminate() {
  return (
    <Box
      sx={{ display: "flex", position: "absolute", top: "50%", left: "50%" }}
    >
      <CircularProgress />
    </Box>
  );
}

export function LinearIndeterminate() {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  );
}

const allPath = {
  people: "people",
  films: "films",
  starships: "starships",
  vehicles: "vehicles",
  species: "species",
  planets: "planets",
};

function App() {
  const { people, films, starships, vehicles, species, planets } = allPath;

  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/people/*" element={<PeopleModule route={people} />} />

          <Route path="/films/*" element={<FilmsModule route={films} />} />
          <Route
            path="/starships/*"
            element={<StarshipsModule route={starships} />}
          />
          <Route
            path="/vehicles/*"
            element={<VehiclesModule route={vehicles} />}
          />
          <Route
            path="/species/*"
            element={<SpeciesModule route={species} />}
          />
          <Route
            path="/planets/*"
            element={<PlanetsModule route={planets} />}
          />

          <Route path="*" element={<Navigate to="/notfound" replace />} />
          <Route path="/notfound" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
