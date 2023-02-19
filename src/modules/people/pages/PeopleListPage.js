import React from "react";
import { usePeople } from "../hooks/usePeople";
import PeopleList from "../components/PeopleList";

function PeopleListPage() {
  const { list } = usePeople();
  console.log(list);

  return (
    <div>
      <h2>People List Page</h2>
      <PeopleList list={list} />
    </div>
  );
}

export default PeopleListPage;
