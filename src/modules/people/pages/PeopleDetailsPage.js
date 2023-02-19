import React from "react";
import { usePersonDetails } from "../hooks/usePersonDetails";
import { useParams } from "react-router";

function PeopleDetailsPage() {
  const { id } = useParams();
  const { details } = usePersonDetails(id);

  console.log(id);

  return (
    <div>
      <h2> Person Details Page</h2>
      <div>Name: {details.name}</div>
    </div>
  );
}

export default PeopleDetailsPage;
