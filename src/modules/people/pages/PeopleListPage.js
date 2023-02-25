import React from "react";
import PeopleList from "../components/PeopleList";
import { useCustomNavigate } from "../../common/hooks/useCustomNavigate";
import { Button } from "@mui/material";
import { CircularIndeterminate, LinearIndeterminate } from "../../../App";
import { useElementsList } from "../../useElementsList";

function PeopleListPage({ route }) {
  const { list, loading } = useElementsList(route);

  const navigate = useCustomNavigate();

  const onBackButtonClick = () => {
    navigate.navigateToPage();
  };

  if (loading === true) {
    return (
      <>
        <h2>People List Page</h2>
        <PeopleList list={list} />
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

export default PeopleListPage;
