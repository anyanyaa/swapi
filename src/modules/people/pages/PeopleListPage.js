import React from "react";
import { usePeople } from "../hooks/usePeople";
import PeopleList from "../components/PeopleList";
import { useCustomNavigate } from "../../common/hooks/useCustomNavigate";
import { Button } from "@mui/material";
import { CircularIndeterminate } from "../../../App";

function PeopleListPage() {
  const { list, loading } = usePeople();

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
  } else if (loading === false) {
    return CircularIndeterminate();
  } else if (sessionStorage.list) {
  }

  // return (
  //   <div>
  //     {loading === false ? (
  //       CircularIndeterminate()
  //     ) : (
  //       <>
  //         <h2>People List Page</h2>
  //         <PeopleList list={list} />
  //         <Button
  //           sx={{
  //             width: 150,
  //           }}
  //           variant="contained"
  //           onClick={onBackButtonClick}
  //         >
  //           Back
  //         </Button>
  //       </>
  //     )}
  //   </div>
  // );
}

export default PeopleListPage;
