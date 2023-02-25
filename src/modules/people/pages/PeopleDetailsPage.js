import React from "react";
import { useParams } from "react-router";
import { useCustomNavigate } from "../../common/hooks/useCustomNavigate";
import { Button } from "@mui/material";
import { CircularIndeterminate, LinearIndeterminate } from "../../../App";
import { useDetails } from "../../useDetails";

function PeopleDetailsPage({ route }) {
  const { id } = useParams();
  const { details, loading } = useDetails(id, route);

  const navigate = useCustomNavigate();

  const onBackButtonClick = () => {
    navigate.navigateToPage(`/${route}`);
  };

  if (loading) {
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
  } else if (!loading && !sessionStorage[`${route}${id}`]) {
    return CircularIndeterminate();
  } else if (!loading && sessionStorage[`${route}${id}`]) {
    return LinearIndeterminate();
  }
}

export default PeopleDetailsPage;
