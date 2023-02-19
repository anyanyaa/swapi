import React from "react";
import { Routes } from "react-router";
import PeopleListPage from "./pages/PeopleListPage";
import { Navigate, Route } from "react-router-dom";
import PeopleDetailsPage from "./pages/PeopleDetailsPage";

function PeopleModule() {
  return (
    <Routes>
      <Route path="/" element={<PeopleListPage />} />
      <Route path="/:id" element={<PeopleDetailsPage />} />
      <Route path="*" element={<Navigate to="/notfound" replace />} />
    </Routes>
  );
}

export default PeopleModule;
