import "./home.css";

function HomePage() {
  return (
    <>
      <h2>Choked By Your Trash?</h2>
      <p>We are here to help you dispose it !</p>
      <div className="searchBar">
        <input type="text" name="search" id="search" placeholder="Enter your Location" />
        <button type="submit">Search</button>
      </div>
    </>
  );
}

export default HomePage;
