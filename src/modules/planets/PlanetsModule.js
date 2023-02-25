import React from "react";
import { Routes } from "react-router";
import { Navigate, Route } from "react-router-dom";
import PlanetsListPage from "./pages/PlanetsListPage";
import PlanetsDetailsPage from "./pages/PlanetsDetailsPage";

function PlanetsModule({ route }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PlanetsListPage route={route} />} />
        <Route path="/:id" element={<PlanetsDetailsPage route={route} />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </div>
  );
}

export default PlanetsModule;
