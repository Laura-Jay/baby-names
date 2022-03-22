import React from "react";
import babyNamesData from "./babyNamesData.json";
import compareTwo from "./compareTwo";
import NameTile from "./NameTile";

function MainContent(): JSX.Element {

  const allBabyNames = [...babyNamesData];
  const sortedBabyNames = allBabyNames.sort(compareTwo);

  const [tile, setTile] = React.useState(sortedBabyNames)
 
  const babyNamesTiles = tile.map((data => (
      <NameTile key={data.id} name={data.name} sex={data.sex} />
  )))

  return (
<>
    <div className="App">
      <div className="babyNamesList">
       {babyNamesTiles}
      </div>
    </div>
    </>
  );
}

export default MainContent;
