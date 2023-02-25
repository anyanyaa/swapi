import React from "react";
import { useElementsList } from "../../useElementsList";
import { useCustomNavigate } from "../../common/hooks/useCustomNavigate";
import FilmsList from "../../films/components/FilmsList";
import { Button } from "@mui/material";
import { CircularIndeterminate, LinearIndeterminate } from "../../../App";
import StarshipsList from "../components/StarshipsList";

function StarshipsListPage({ route }) {
  const { list, loading } = useElementsList(route);

  const navigate = useCustomNavigate();

  const onBackButtonClick = () => {
    navigate.navigateToPage();
  };

  if (loading === true) {
    return (
      <>
        <h2>Starships List Page</h2>
        <StarshipsList list={list} />
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

export default StarshipsListPage;
