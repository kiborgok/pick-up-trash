import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AboutPage from "../about/AboutPage";

function HomePage() {
  return (
    <>
      <section className="banner">
        <h2>Choked By Your Trash?</h2>
        <p>We are here to help you dispose it !</p>
        <div className="searchBar">
          <div className="searchArea">
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
            <input type="text" name="search" id="search" placeholder="Enter your Location" />
          </div>
          <button className="searchBtn" type="submit">
            Search
          </button>
        </div>
      </section>
      <AboutPage />
    </>
  );
}

export default HomePage;
