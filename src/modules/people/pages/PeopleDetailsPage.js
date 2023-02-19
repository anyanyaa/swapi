import React from "react";
import { usePersonDetails } from "../hooks/usePersonDetails";
import { useParams } from "react-router";
import { useCustomNavigate } from "../../common/hooks/useCustomNavigate";

function PeopleDetailsPage() {
  const { id } = useParams();
  const { details } = usePersonDetails(id);

  const navigate = useCustomNavigate();

  const onBackButtonClick = () => {
    navigate.goBack();
  };

  return (
    <div>
      <h2> Person Details Page</h2>
      <div>Name: {details.name}</div>
      <button onClick={onBackButtonClick}>Back</button>
    </div>
  );
}

export default PeopleDetailsPage;
