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
            <h3>Recycling</h3>
            <p>We connect you to waste recycling companies when you have wastes that can be recycled.</p>
            <p>
            Recycling of waste material means taking the materials and transforming them into new products.
            </p>
          </div>
          <div>
            <FontAwesomeIcon className="recycle" icon={faTruck} />
            <h3>Garbage Collection and Disposal</h3>
            <p>We connect You to Garbage Disposers, or Garbage owners incase you are a
               Garbage Collection company  </p>
            <p>We have several registered Garbage collector across the city who can pick 
              the trash on your request at any time of the day</p>
            <p></p>
          </div>
          <div>
            <FontAwesomeIcon className="recycle" icon={faAnglesRight} />
            <p>
            Modern garbage disposals boast several innovative features that disposals of yesteryear did not have. These include technologies to drastically reduce noise while in use, resulting in a surprisingly quiet appliance, and removable splash guards, for the purposes of cleaning. Other features include blades that are resistant to both jamming and corrosion and simple integration with dishwashers.
            </p>
          </div>
        </div>
        <div className="reviews">
          <h2>Client Reviews</h2>
          <div id="client">
            <div>
            <img src="" alt="client" />
            <h4>John Wick</h4>
            <p>Your services are on a high notch! You just the cleaning company I was looking for. Keep up with the amazing service as we continue working together! </p>
           </div>
           <div>
            <img src="" alt="client" />
            <h4>John Wick</h4>
            <p>Best service provider in cleaning, garbage collection sanitary services, landscaping and fumigation services. They have competent staff, and utilize flexibility and incentives which reinforce quality and efficiency. GOOD WORK!</p>
          </div>
          <div>
            <img src="" alt="client" />
            <h4>John Wick</h4>
            <p>the best company have ever encountered their best services ever. I recommend everyone to go for their services. They are the best.</p>
          </div>
          
          <div >
            <img src="" alt="client" />
            <h4>John Wick</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse soluta aperiam enim nostrum iusto! Ducimus neque tenetur, temporibus
               nesciunt molestias harum cum assumenda aperiam eligendi facilis officiis saepe voluptatum dolor.</p>
          </div>
         </div>
        </div>
      </div>
      

    );
}

export default AboutPage;