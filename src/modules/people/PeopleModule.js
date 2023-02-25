import React from "react";
import { Routes } from "react-router";
import PeopleListPage from "./pages/PeopleListPage";
import { Navigate, Route } from "react-router-dom";
import PeopleDetailsPage from "./pages/PeopleDetailsPage";

function PeopleModule({ route }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PeopleListPage route={route} />} />
        <Route path="/:id" element={<PeopleDetailsPage route={route} />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </div>
  );
}
export default PeopleModule;
