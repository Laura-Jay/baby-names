interface HeaderProps {
  searchTerm: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <>
      <nav className="navbar">
        <h2 className="navbar--title">Baby Names</h2>
        <p>
          {" "}
          <strong>Search:</strong>
        </p>
        <input
          type="text"
          placeholder="Name"
          name="searchTerm"
          value={props.searchTerm}
          onChange={props.handleChange}
          className="navbar--search"
        />
        <p>You are searching for {props.searchTerm}</p>
      </nav>
    </>
  );
}
