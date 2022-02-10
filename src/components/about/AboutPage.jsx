import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle, faTruck, faAnglesRight, faStar } from "@fortawesome/free-solid-svg-icons";

function AboutPage() {
  return (
    <div className="aboutContainer">
      <div className="about">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, a. Alias perspiciatis
          neque voluptatem quam dolorem fuga, fugiat perferendis natus mollitia eum odio tempore?
          Enim eius ipsa voluptatem ipsam accusamus.
        </p>
      </div>
      <div className="about-boxes">
        <div>
          <FontAwesomeIcon className="recycle" icon={faRecycle} />
          <h3>Recycle</h3>
          <p>
            We connect you to waste recycling companies when you have wastes that can be recycled.
            Recycling of waste material means taking the materials and transforming them into new
            products.
          </p>
        </div>
        <div>
          <FontAwesomeIcon className="recycle" icon={faTruck} />
          <h3>Convenience</h3>
          <p>
            We connect You to Garbage Disposers, or Garbage owners incase you are a Garbage
            Collection company. We have several registered Garbage collector across the city who can
            pick the trash on your request at any time of the day
          </p>
        </div>
        <div>
          <FontAwesomeIcon className="recycle" icon={faAnglesRight} />
          <h3>Fast</h3>
          <p>
            Modern garbage disposals boast several innovative features that disposals of yesteryear
            did not have. These include technologies to drastically reduce noise while in use,
            resulting in a surprisingly quiet appliance.
          </p>
        </div>
      </div>
      <div className="reviews">
        <h2>Client Reviews</h2>
        <div className="client">
          <div>
            <img src="/person1.jpg" alt="client" />
            <h3>John Wick</h3>
            <p>
              Your services are on a high notch! You just the cleaning company I was looking for.
              Keep up with the amazing service as we continue working together!
            </p>
            <div className="rating">
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
            </div>
          </div>
          <div>
            <img src="/person2.jpg" alt="client" />
            <h3>John Wick</h3>
            <p>
              Your services are on a high notch! You just the cleaning company I was looking for.
              Keep up with the amazing service as we continue working together!
            </p>
            <div className="rating">
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
            </div>
          </div>
          <div>
            <img src="/person3.jpg" alt="client" />
            <h3>John Wick</h3>
            <p>
              Your services are on a high notch! You just the cleaning company I was looking for.
              Keep up with the amazing service as we continue working together!
            </p>
            <div className="rating">
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
            </div>
          </div>

          <div>
            <img src="/person4.jpg" alt="client" />
            <h3>John Wick</h3>
            <p>
              Your services are on a high notch! You just the cleaning company I was looking for.
              Keep up with the amazing service as we continue working together!
            </p>
            <div className="rating">
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
