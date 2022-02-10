import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AboutPage from "../about/AboutPage";
import Footer from "../footer/Footer";
import ContactPage from "../contact/ContactPage";
import {useState} from "react"

function HomePage() {
    let [locationInput, setLocationInput] = useState("");
    let availableLocations = [
      "kisumu",
      "nairobi",
      "nakuru",
      "mombasa",
      "eldoret",
      "machakos",
    ]

    let handleChange = (e) => {
      let value = e.target.value;
      setLocationInput(value)
    }

    let handleSubmit = () => {
      let available = availableLocations.find(location => location == locationInput.toLowerCase())
      if(available){
        console.log(available)
       alert(`Your location ${available.toUpperCase()} is available`)
      }
      else{
       alert(`Your location ${locationInput.toUpperCase()} is not available`)
      }
    }

  return (
    <>
      <section className="banner">
        <h2>Choked By Your Trash?</h2>
        <p>We are here to help you dispose it !</p>
        <div className="searchBar">
          <div className="searchArea">
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
            <input 
              type="text" 
              name="search" 
              value={locationInput}
              onChange={handleChange}
              id="search" 
              placeholder="Enter your Location" 
            />
          </div>
          <button className="searchBtn" type="submit" onClick={handleSubmit}>
            Search
          </button>
          <div className="location-msg"></div>
        </div>
      </section>
      <AboutPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default HomePage;
