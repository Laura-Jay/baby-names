import React from "react";
import { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import "./styles.css";

function App(): JSX.Element {
  const [search, setSearch] = useState("");

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <>
      <Header searchTerm={search} handleChange={handleSearch} />
      <MainContent searchTerm={search} />
    </>
  );
}

export default App;
