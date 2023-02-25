import React from "react";
import { Routes } from "react-router";
import { Navigate, Route } from "react-router-dom";
import FilmsListPage from "../films/pages/FilmsListPage";
import FilmsDetailsPage from "../films/pages/FilmsDetailsPage";
import VehiclesListPage from "./pages/VehiclesListPage";
import VehiclesDetailsPage from "./pages/VehiclesDetailsPage";

function VehiclesModule({ route }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<VehiclesListPage route={route} />} />
        <Route path="/:id" element={<VehiclesDetailsPage route={route} />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </div>
  );
}

export default VehiclesModule;
