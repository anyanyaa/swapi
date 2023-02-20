import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import FilmsPage from "./modules/films/pages/FilmsPage";
import StarshipsPage from "./modules/starships/pages/StarshipsPage";
import VehiclesPage from "./modules/vehicles/pages/VehiclesPage";
import SpeciesPage from "./modules/species/pages/SpeciesPage";
import PlanetsPage from "./modules/planets/pages/PlanetsPage";
import HomePage from "./modules/common/pages/HomePage";
import NotFoundPage from "./modules/common/pages/NotFoundPage";
import PeopleModule from "./modules/people/PeopleModule";

import { Box, CircularProgress, LinearProgress } from "@mui/material";

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

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/people/*" element={<PeopleModule />} />

          <Route path="/films" element={<FilmsPage />} />
          <Route path="/starships" element={<StarshipsPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/species" element={<SpeciesPage />} />
          <Route path="/planets" element={<PlanetsPage />} />

          <Route path="*" element={<Navigate to="/notfound" replace />} />
          <Route path="/notfound" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
