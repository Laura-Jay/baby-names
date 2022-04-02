import React from "react";

interface BabyTiles {
  key: number;
  sex: string;
  name: string;
  favourite: boolean;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function FavouriteNameTile(props: BabyTiles): JSX.Element {
  const styles = {
    backgroundColor: props.sex === "f" ? "#EFD3D7" : "#DEE2FF",
  };

  return (
    <>
      {props.favourite && (
        <div style={styles} className="name-tile" onClick={props.handleClick}>
          {props.name}
        </div>
      )}
    </>
  );
}
