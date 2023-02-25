import React from "react";
import { useElementsList } from "../../useElementsList";
import { useCustomNavigate } from "../../common/hooks/useCustomNavigate";
import { Button } from "@mui/material";
import { CircularIndeterminate, LinearIndeterminate } from "../../../App";
import VehiclesList from "../components/VehiclesList";

function VehiclesListPage({ route }) {
  const { list, loading } = useElementsList(route);

  const navigate = useCustomNavigate();

  const onBackButtonClick = () => {
    navigate.navigateToPage();
  };

  if (loading) {
    return (
      <>
        <h2>Vehicles List Page</h2>
        <VehiclesList list={list} />
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
  } else if (!loading && !sessionStorage[route]) {
    return CircularIndeterminate();
  } else if (!loading && sessionStorage[route]) {
    return LinearIndeterminate();
  }
}

export default VehiclesListPage;
