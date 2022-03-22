import React from "react";
import { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import "./styles.css";

function App(): JSX.Element {

  const [searchTerm, setSearchTerm] = useState("")

  return (
  <>
  <Header/>
  <MainContent />
  </>
  )
}

export default App;
