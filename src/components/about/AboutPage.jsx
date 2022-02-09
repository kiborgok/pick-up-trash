import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle, faTruck, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

function AboutPage(){
    return (
      <div className="container">
        <div className="about">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, a.
            Alias perspiciatis neque voluptatem quam dolorem fuga, fugiat
            perferendis natus mollitia eum odio tempore? Enim eius ipsa
            voluptatem ipsam accusamus.
          </p>
        </div>
        <div className="about-boxes">
          <div>
            <FontAwesomeIcon className="recycle" icon={faRecycle} />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              deleniti numquam expedita cumque accusantium iusto magnam, nemo in
              quam amet aliquam ea ut quasi dolore placeat? Labore dolores error
              necessitatibus.
            </p>
          </div>
          <div>
            <FontAwesomeIcon className="recycle" icon={faTruck} />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              deleniti numquam expedita cumque accusantium iusto magnam, nemo in
              quam amet aliquam ea ut quasi dolore placeat? Labore dolores error
              necessitatibus.
            </p>
          </div>
          <div>
            <FontAwesomeIcon className="recycle" icon={faAnglesRight} />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              deleniti numquam expedita cumque accusantium iusto magnam, nemo in
              quam amet aliquam ea ut quasi dolore placeat? Labore dolores error
              necessitatibus.
            </p>
          </div>
        </div>
      </div>
    );
}

export default AboutPage;