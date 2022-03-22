interface BabyTiles {
  key: number;
  sex: string;
  name: string;
}

export default function NameTile(props: BabyTiles): JSX.Element {
  const styles = {
    backgroundColor: props.sex === "f" ? "#EFD3D7" : "#DEE2FF",
  };

  return (
    <div style={styles} className="name-tile">
      {props.name}
    </div>
  );
}
