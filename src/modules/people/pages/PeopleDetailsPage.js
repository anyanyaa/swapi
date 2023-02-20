import React from "react";
import { usePersonDetails } from "../hooks/usePersonDetails";
import { useParams } from "react-router";
import { useCustomNavigate } from "../../common/hooks/useCustomNavigate";
import { Button } from "@mui/material";
import { CircularIndeterminate, LinearIndeterminate } from "../../../App";

function PeopleDetailsPage() {
  const { id } = useParams();
  const { details, loading } = usePersonDetails(id);

  const navigate = useCustomNavigate();

  const onBackButtonClick = () => {
    navigate.goBack();
  };

  if (loading === true) {
    return (
      <>
        <h2> Person Details Page</h2>
        <div className="details">Name: {details.name}</div>
        <Button
          sx={{
            width: 150,
          }}
          variant="contained"
          onClick={onBackButtonClick}
        >
          Back
        </Button>
      </>
    );
  } else if (loading === false && !sessionStorage.details) {
    return CircularIndeterminate();
  } else if (sessionStorage.details) {
    return LinearIndeterminate();
  }
}

export default PeopleDetailsPage;
