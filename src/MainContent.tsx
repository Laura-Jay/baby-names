import React from "react";
import babyNamesData from "./babyNamesData.json";
import compareTwo from "./compareTwo";
import NameTile from "./NameTile";
import FavouriteNameTile from "./FavouriteNameTile";

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

  const nameTiles = filteredBabyNames.map((obj) => ({
    ...obj,
    isFavourite: false,
  }));
  const favouriteTiles = filteredBabyNames.map((obj) => ({
    ...obj,
    isFavourite: false,
  }));

  const [tiles, setTiles] = React.useState(nameTiles);

  const [favourites, setFavourites] = React.useState(favouriteTiles);

  function handleFavourite(id: number) {
    
    setFavourites((prevValue) => {
      return prevValue.map((element) => {
        return element.id === id
          ? { ...element, isFavourite: !element.isFavourite }
          : element;
      });
    });

    setTiles((prevValue) => {
      return prevValue.map((element) => {
        return element.id === id
          ? { ...element, isFavourite: !element.isFavourite }
          : element;
      });
    });
  }

  const favouriteNames = favourites.map((data) => (
    <FavouriteNameTile
      key={data.id}
      name={data.name}
      sex={data.sex}
      handleClick={() => handleFavourite(data.id)}
      favourite={data.isFavourite}
    />
  ));

  const babyNamesTiles = tiles.map((data) => (
    <NameTile
      key={data.id}
      name={data.name}
      sex={data.sex}
      handleClick={() => handleFavourite(data.id)}
      favourite={data.isFavourite}
    />
  ));

  return (
    <>
      <h3>Favourites</h3>
      <div className="favourites">{favouriteNames}</div>
      <h3>Suggestions:</h3>
      <div className="babyNamesList">{babyNamesTiles}</div>
    </>
  );
}

export default MainContent;
