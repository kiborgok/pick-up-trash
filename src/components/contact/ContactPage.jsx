import "./contact.css"
import emailjs from "emailjs-com"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ContactPage(){
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_h211o5s', 'template_rsaybpf', e.target, 'user_k0bZjq4R0VCGguDF9wOdZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return(
     <div className="contactcontainer">
          <div id="messageheader">
            <h2>Contact Us</h2>
            <p>For any inquires of communication, you can
                 reach through the contacts below leave a message</p>
          </div>

     <div id="contacts">
         <div id="iconic">
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
        <div className="message">
           
            <form onSubmit={sendEmail}>
            <h4>Leave a Message</h4>
                    <div className="messageinputs">
                        <div className="nameholder">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="locationholder">
                            <input type="text" className="form-control" placeholder="Location" name="location"/>
                        </div>
                        <div className="emailholder">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="phoneholder">
                            <input type="text" className="form-control" placeholder="Phone Number" name="phone"/>
                        </div>
                        <div className="messageholder">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="submitbutton">
                            <input type="submit" className="button" value="Send Message"></input>
                        </div>
                    </div>
                </form>
        </div>
        </div>
     </div>
    );
}

export default ContactPage;