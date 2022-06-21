import "./SearchBar.css";
const SearchBar = () => {
  const CityChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <input type="text" onChange={CityChangeHandler} placeholder="Search.." />
    </div>
  );
};

export default SearchBar;
