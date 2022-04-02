import React from "react";
import babyNamesData from "./babyNamesData.json";
import compareTwo from "./compareTwo";
import NameTile from "./NameTile";
import FavouriteNameTile from "./FavouriteNameTile";

interface NameData {
  name: string;
  sex: string;
}

function MainContent(): JSX.Element {
  //useState holding input from searchbar
  const [search, setSearch] = React.useState("");

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function searchNames(nameData: NameData) {
    if (nameData.name.includes(search)) {
      return nameData;
    }
  }

  const [filter, setFilter] = React.useState("");

  function filterGender(nameData: NameData) {
    if (nameData.sex.includes(filter)) {
      return nameData;
    }
  }

  function handleShowAll() {
    setFilter("");
  }

  function handleFilterFemale() {
    setFilter("f");
  }

  function handleFilterMale() {
    setFilter("m");
  }

  const allBabyNames = [...babyNamesData];
  const sortedBabyNames = allBabyNames.sort(compareTwo);

  const filteredBabyNames = sortedBabyNames.filter(searchNames);

  const nameTiles = filteredBabyNames.map((obj) => ({
    ...obj,
    isFavourite: false,
  }));
  const favouriteTiles = sortedBabyNames.map((obj) => ({
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

  const babyNamesTiles = tiles
    .filter(searchNames)
    .filter(filterGender)
    .map((data) => (
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
      <nav className="navbar">
        <h2 className="navbar--title">Baby Names</h2>

        <div className="button-bar">
          {filter === "m" ? (
            <button className="button-selected">Male</button>
          ) : (
            <button onClick={handleFilterMale}>Male</button>
          )}

          {filter === "f" ? (
            <button className="button-selected">Female</button>
          ) : (
            <button onClick={handleFilterFemale}>Female</button>
          )}

          {filter === "" ? (
            <button className="button-selected">All</button>
          ) : (
            <button onClick={handleShowAll}>All</button>
          )}
        </div>

        <p>
          <strong>Search:</strong>
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Name"
            name="searchTerm"
            value={search}
            onChange={handleSearch}
            className="navbar--search"
          />
          <p>You are searching for {search}</p>
        </div>
      </nav>

      <h3>Favourites</h3>
      <div className="favourites">{favouriteNames}</div>
      <h3>Suggestions:</h3>
      <div className="babyNamesList">{babyNamesTiles}</div>
    </>
  );
}

export default MainContent;
