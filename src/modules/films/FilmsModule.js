import React from "react";
import { Routes } from "react-router";
import { Navigate, Route } from "react-router-dom";
import FilmsListPage from "./pages/FilmsListPage";
import FilmsDetailsPage from "./pages/FilmsDetailsPage";

function PeopleModule() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FilmsListPage />} />
        <Route path="/:id" element={<FilmsDetailsPage />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </div>
  );
}
export default PeopleModule;
