import React from "react";
import babyNamesData from "./babyNamesData.json";
import compareTwo from "./compareTwo";
import NameTile from "./NameTile";

interface MainContentProps {
  searchTerm: string;
}

interface NameData {
  name: string;
}

function MainContent(props: MainContentProps): JSX.Element {
  function searchNames(nameData: NameData) {
    if (nameData.name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
      return nameData;
    }
  }

  const allBabyNames = [...babyNamesData];
  const sortedBabyNames = allBabyNames.sort(compareTwo);

  const filteredBabyNames = sortedBabyNames.filter(searchNames);

  // const [tile, setTile] = React.useState(filteredBabyNames);
  const tile = filteredBabyNames

  const babyNamesTiles = tile.map((data) => (
    <NameTile key={data.id} name={data.name} sex={data.sex} />
  ));

  return (
    <>
      <div className="App">
        <div className="babyNamesList">{babyNamesTiles}</div>
      </div>
    </>
  );
}

export default MainContent;
