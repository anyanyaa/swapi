import React from "react";
import { Routes } from "react-router";
import { Navigate, Route } from "react-router-dom";
import StarshipsListPage from "./pages/StarshipsListPage";
import StarshipsDetailsPage from "./pages/StarshipsDetailsPage";

function StarshipsModule({ route }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StarshipsListPage route={route} />} />
        <Route path="/:id" element={<StarshipsDetailsPage route={route} />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </div>
  );
}

export default StarshipsModule;
