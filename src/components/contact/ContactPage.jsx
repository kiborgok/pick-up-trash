import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ContactPage(){
    return(
     <div className="contactcontainer">
            <h2>Contact Us</h2>
            <p>For any inquires of communication, you can
                 reach through the contacts below leave a message</p>
            <div id="contacts">
        <div id="mobile">
            <p>Mobile: +254 111 222 333</p>
        </div>
        <div id="email">
            <p>Email: sales@pickuptrash.com</p>
        </div>
        <div id="address">
            <p>P.O Box: 111 Nairobi.</p>
        </div>  
        </div>
        <div id="message">
            <h2>Leave a Message</h2>
        
        </div>
        
     </div>
    );
}

export default ContactPage;