import React from "react";
import { Routes } from "react-router";
import { Navigate, Route } from "react-router-dom";
import FilmsListPage from "../films/pages/FilmsListPage";
import FilmsDetailsPage from "../films/pages/FilmsDetailsPage";
import SpeciesListPage from "./pages/SpeciesListPage";
import SpeciesDetailsPage from "./pages/SpeciesDetailsPage";

function SpeciesModule({ route }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SpeciesListPage route={route} />} />
        <Route path="/:id" element={<SpeciesDetailsPage route={route} />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </div>
  );
}

export default SpeciesModule;
