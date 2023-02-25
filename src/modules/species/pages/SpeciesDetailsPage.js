import React from "react";
import { useParams } from "react-router";
import { useDetails } from "../../useDetails";
import { useCustomNavigate } from "../../common/hooks/useCustomNavigate";
import { Button } from "@mui/material";
import { CircularIndeterminate, LinearIndeterminate } from "../../../App";

function SpeciesDetailsPage({ route }) {
  const { id } = useParams();
  const { details, loading } = useDetails(id, route);

  const navigate = useCustomNavigate();

  const onBackButtonClick = () => {
    navigate.navigateToPage(`/${route}`);
  };

  if (loading === true) {
    return (
      <>
        <h2> Species Details Page</h2>
        <div className="details">Title: {details.name}</div>
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

export default SpeciesDetailsPage;
