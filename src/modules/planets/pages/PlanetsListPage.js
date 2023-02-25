import React from "react";
import { useElementsList } from "../../useElementsList";
import { useCustomNavigate } from "../../common/hooks/useCustomNavigate";
import { Button } from "@mui/material";
import { CircularIndeterminate, LinearIndeterminate } from "../../../App";
import PlanetsList from "./components/PlanetsList";

function PlanetsListPage({ route }) {
  const { list, loading } = useElementsList(route);

  const navigate = useCustomNavigate();

  const onBackButtonClick = () => {
    navigate.navigateToPage();
  };

  if (loading === true) {
    return (
      <>
        <h2>Films List Page</h2>
        <PlanetsList list={list} />
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
  } else if (loading === false && !sessionStorage.list) {
    return CircularIndeterminate();
  } else if (sessionStorage.list) {
    return LinearIndeterminate();
  }
}

export default PlanetsListPage;